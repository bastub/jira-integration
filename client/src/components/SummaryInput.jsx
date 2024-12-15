export default function SummaryInput({ summary, onChange }) {
  return (
    <div className="form-element">
      <label htmlFor="summary">Summary</label>
      <input
        type="text"
        id="summary"
        value={summary}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
}
