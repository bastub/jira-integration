export default function ProjectSelector({
  projects,
  selectedProject,
  onSelectProject,
}) {
  return (
    <div className="form-element">
      <div className="label-img-div">
        <img
          className="label-img"
          src={selectedProject ? selectedProject.avatarUrls["48x48"] : ""}
          alt={selectedProject ? selectedProject.name : ""}
        />
        <label htmlFor="project">
          {selectedProject ? selectedProject.name : "Project"}
        </label>
      </div>
      <select
        id="project"
        onChange={(e) => {
          const selectedId = e.target.value;
          const project = projects.find((p) => p.id === selectedId);
          onSelectProject(project); // Set the selected project and fetch issue types
        }}
        required
      >
        <option value="">-- Select a Project --</option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </select>
    </div>
  );
}
