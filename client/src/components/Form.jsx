import { useState, useEffect } from "react";
import { getProjects, setIssue, getIssueTypeFromProject } from "../apiService";
import ProjectSelector from "./ProjectSelector";
import IssueTypeSelector from "./IssueTypeSelector";
import SummaryInput from "./SummaryInput";
import DescriptionInput from "./DescriptionInput";

// TODO: Handle all fields.

export default function Form() {
  const [projects, setProjects] = useState([]);
  const [issueTypes, setIssueTypes] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedIssueType, setSelectedIssueType] = useState(null);
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects();
        setProjects(response.data.values);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const fetchIssueTypesFromProject = async (projectId) => {
    try {
      const response = await getIssueTypeFromProject(projectId);
      setIssueTypes(response.data.issueTypes);
    } catch (error) {
      console.error("Error fetching issue types:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await setIssue({
        fields: {
          project: { id: selectedProject.id },
          issuetype: { id: selectedIssueType.id },
          summary,
          description: {
            content: [
              {
                content: [{ text: description, type: "text" }],
                type: "paragraph",
              },
            ],
            type: "doc",
            version: 1,
          },
        },
      });

      document.getElementById("validationMessage").innerText = response.data
        .errors
        ? `❌ ${response.data.errors.summary}`
        : `✅ Ticket ${response.data.key} created successfully!`;
    } catch (error) {
      console.error("Error creating issue:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="select-div">
        <ProjectSelector
          projects={projects}
          selectedProject={selectedProject}
          onSelectProject={(project) => {
            setSelectedProject(project);
            fetchIssueTypesFromProject(project.id);
            setSelectedIssueType(null);
          }}
        />
        <IssueTypeSelector
          issueTypes={issueTypes}
          selectedIssueType={selectedIssueType}
          onSelectIssueType={setSelectedIssueType}
          isDisabled={!selectedProject}
        />
      </div>
      <SummaryInput summary={summary} onChange={setSummary} />
      <DescriptionInput description={description} onChange={setDescription} />
      <button type="submit">Create</button>
      <p id="validationMessage"></p>
    </form>
  );
}
