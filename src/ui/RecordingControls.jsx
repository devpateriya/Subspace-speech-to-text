function RecordingControls({ isRecording, onStart, onStop }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button
        onClick={onStart}
        disabled={isRecording}
      >
        Start Recording
      </button>

      <button
        onClick={onStop}
        disabled={!isRecording}
        style={{ marginLeft: "10px" }}
      >
        Stop Recording
      </button>

      <div style={{ marginTop: "10px" }}>
        {isRecording ? "🎙️ Recording..." : "Idle"}
      </div>
    </div>
  );
}

export default RecordingControls;