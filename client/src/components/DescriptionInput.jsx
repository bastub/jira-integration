export default function DescriptionInput({ description, onChange }) {
  return (
    <div className="form-element">
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    </div>
  );
}
