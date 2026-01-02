import RecordingControls from "./ui/RecordingControls";
import TranscriptView from "./ui/TranscriptView";
import useRecordingState from "./hooks/useRecordingState";

function App() {
  const {
    isRecording,
    transcript,
    startRecording,
    stopRecording,
  } = useRecordingState();

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Wispr Flow Clone</h2>

      <RecordingControls
        isRecording={isRecording}
        onStart={startRecording}
        onStop={stopRecording}
      />

      <TranscriptView transcript={transcript} />
    </div>
  );
}

export default App;
