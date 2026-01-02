import { useState } from "react";
import { startMicrophone, stopMicrophone } from "../audio/microphoneService";
import {
  startDeepgram,
  stopDeepgram,
  sendAudioChunk,
} from "../transcription/deepgramService";

function useRecordingState() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");

  const startRecording = async () => {
    setTranscript("");
    setIsRecording(true);

    startDeepgram((text, isFinal) => {
      if (isFinal) {
        setTranscript(prev => prev + " " + text);
      }
    });

    await startMicrophone(sendAudioChunk);
  };

  const stopRecording = () => {
    setIsRecording(false);
    stopMicrophone();
    stopDeepgram();
  };

  return {
    isRecording,
    transcript,
    startRecording,
    stopRecording,
  };
}

export default useRecordingState;