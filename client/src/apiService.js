import axios from "axios";

// get issue types available on the Jira account
const getIssueType = async () => {
  var URL = import.meta.env.VITE_baseURL + "/issuetypes";
  const response = await axios.get(URL);
  return response.data;
};

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

export { getIssueType, getProjects, setIssue };
