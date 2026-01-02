let audioContext = null;
let processor = null;
let source = null;
let stream = null;

export async function startMicrophone(onAudioChunk) {
  // Request mic access
  stream = await navigator.mediaDevices.getUserMedia({ audio: true });

  // Create AudioContext at 16kHz (required by Deepgram config)
  audioContext = new AudioContext({ sampleRate: 16000 });

  // VERY IMPORTANT: resume context after user gesture
  await audioContext.resume();

  source = audioContext.createMediaStreamSource(stream);

  // Deprecated but still correct & reliable
  processor = audioContext.createScriptProcessor(4096, 1, 1);

  source.connect(processor);
  processor.connect(audioContext.destination);

  processor.onaudioprocess = (event) => {
    const input = event.inputBuffer.getChannelData(0);



    onAudioChunk(convertFloat32ToInt16(input));
  };
}

export function stopMicrophone() {
  if (processor) {
    processor.disconnect();
    processor = null;
  }

  if (source) {
    source.disconnect();
    source = null;
  }

  if (stream) {
    stream.getTracks().forEach((t) => t.stop());
    stream = null;
  }

  if (audioContext) {
    audioContext.close();
    audioContext = null;
  }
}

function convertFloat32ToInt16(buffer) {
  const length = buffer.length;
  const result = new Int16Array(length);

  for (let i = 0; i < length; i++) {
    result[i] = Math.max(-1, Math.min(1, buffer[i])) * 0x7fff;
  }

  return result.buffer;
}