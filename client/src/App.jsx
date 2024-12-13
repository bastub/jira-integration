import { useState, useEffect } from "react";
import "./App.css";
import { getIssueType, getProjects, setIssue } from "./apiService";

function App() {
  // Variables to store the required data
  const [issueTypes, setIssueTypes] = useState([]);
  const [selectedIssueType, setSelectedIssueType] = useState(null);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [summary, setSummary] = useState("");

  // Fetch data when the component mounts
  useEffect(() => {
    // Fetch issue types
    const fetchIssueTypes = async () => {
      try {
        const response = await getIssueType();
        setIssueTypes(response.data); // response.data is an array
      } catch (error) {
        console.error("Error fetching issue types:", error);
      }
    };

    // Fetch projects
    const fetchProjects = async () => {
      try {
        const response = await getProjects();
        setProjects(response.data.values); // response.data.values is an array
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchIssueTypes();
    fetchProjects();
  }, []);

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    setIssue({
      fields: {
        project: { id: selectedProject.id },
        issuetype: { id: selectedIssueType.id },
        summary: summary,
      },
    });
  }

  // Handle type selection changes
  function handleTypeSelectionChange(e) {
    const selectedId = e.target.value;
    const selected = issueTypes.find(
      (issueType) => issueType.id === selectedId
    );
    setSelectedIssueType(selected);
  }

  // Handle project selection changes
  function handleProjectSelectionChange(e) {
    const selectedId = e.target.value;
    const selected = projects.find((project) => project.id === selectedId);
    setSelectedProject(selected);
  }

  return (
    <>
      <h1>Jira Integration</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="select-div">
            <div className="form-element">
              <div className="label-img-div">
                <img
                  className="label-img"
                  src={
                    selectedProject ? selectedProject.avatarUrls["48x48"] : ""
                  }
                  alt={selectedProject ? selectedProject.name : "Project"}
                />
                <label htmlFor="project">
                  {selectedProject ? selectedProject.name : "Project"}
                </label>
              </div>
              <select id="project" onChange={handleProjectSelectionChange}>
                <option value="">-- Select a Project --</option>
                {/* Create an option for every project */}
                {projects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-element">
              <div className="label-img-div">
                <img
                  className="label-img"
                  src={selectedIssueType ? selectedIssueType.iconUrl : ""}
                  alt={
                    selectedIssueType ? selectedIssueType.name : "Issue Type"
                  }
                />
                <label htmlFor="issueType">
                  {selectedIssueType ? selectedIssueType.name : "Issue Type"}
                </label>
              </div>
              <select id="issueType" onChange={handleTypeSelectionChange}>
                <option value="">-- Select an Issue Type --</option>
                {/* Create an option for every isse type */}
                {issueTypes.map((issueType) => (
                  <option key={issueType.id} value={issueType.id}>
                    {issueType.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-element">
            <label htmlFor="summary">Summary</label>
            <input
              type="text"
              id="summary"
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    </>
  );
}

export default App;
