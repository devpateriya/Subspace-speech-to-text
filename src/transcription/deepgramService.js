let socket = null;

// Using your key as requested (no security discussion)
const DEEPGRAM_API_KEY = "92b458623d84c64077e6a5d4228d9c8022054129";

export function startDeepgram(onTranscript) {
  // Safety: close any previous socket
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.close();
  }

  socket = new WebSocket(
    "wss://api.deepgram.com/v1/listen?punctuate=true&interim_results=true&encoding=linear16&sample_rate=16000",
    ["token", DEEPGRAM_API_KEY]
  );



  socket.onmessage = (message) => {
    const data = JSON.parse(message.data);

    const transcript =
      data.channel &&
      data.channel.alternatives &&
      data.channel.alternatives[0] &&
      data.channel.alternatives[0].transcript;

    if (transcript && transcript.trim() !== "") {
      onTranscript(transcript, data.is_final === true);
    }
  };
}

export function sendAudioChunk(chunk) {
  if (!socket) return;

  if (socket.readyState === WebSocket.OPEN) {
    socket.send(chunk);
  }
}

export function stopDeepgram() {
  if (socket) {
    socket.close();
    socket = null;
  }
}