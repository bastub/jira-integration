export default function IssueTypeSelector({
  issueTypes,
  selectedIssueType,
  onSelectIssueType,
  isDisabled,
}) {
  return (
    <div className="form-element">
      <div className="label-img-div">
        <img
          className="label-img"
          src={selectedIssueType ? selectedIssueType.iconUrl : ""}
          alt={selectedIssueType ? selectedIssueType.name : ""}
        />
        <label htmlFor="issueType">
          {selectedIssueType ? selectedIssueType.name : "Issue Type"}
        </label>
      </div>
      <select
        id="issueType"
        onChange={(e) => {
          const selectedId = e.target.value;
          const issueType = issueTypes.find((type) => type.id === selectedId);
          onSelectIssueType(issueType); // Set the selected issue type
        }}
        disabled={isDisabled} // Disable the select if no project is selected
        required
      >
        <option value="">-- Select an Issue Type --</option>
        {issueTypes.map((type) => (
          <option key={type.id} value={type.id}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
}
