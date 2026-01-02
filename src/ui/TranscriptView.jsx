function TranscriptView({ transcript }) {
  return (
    <div>
      <h3>Transcript</h3>
      <textarea
        value={transcript}
        readOnly
        rows={6}
        style={{ width: "100%" }}
        placeholder="Your transcribed text will appear here..."
      />
    </div>
  );
}

export default TranscriptView;