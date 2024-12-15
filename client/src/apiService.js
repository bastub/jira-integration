import axios from "axios";

// get projects available on the Jira account
const getProjects = async () => {
  var URL = import.meta.env.VITE_baseURL + "/projects";
  const response = await axios.get(URL);
  return response.data;
};

// create a new issue on the Jira account
const setIssue = async (req) => {
  console.log("Request:", req);
  var URL = import.meta.env.VITE_baseURL + "/issue";
  const response = await axios.post(URL, req);
  console.log(response.data);
  return response.data;
};

// get issue types from a project
const getIssueTypeFromProject = async (projectId) => {
  var URL = import.meta.env.VITE_baseURL + "/issuetypes/" + projectId;
  const response = await axios.get(URL);
  return response.data;
};

// get issue type details
const getIssueTypeDetail = async (projectId, issueTypeId) => {
  var URL =
    import.meta.env.VITE_baseURL +
    "/issuetypesdetail/" +
    projectId +
    "/" +
    issueTypeId;
  const response = await axios.get(URL);
  return response.data;
};

export { getProjects, setIssue, getIssueTypeFromProject, getIssueTypeDetail };
