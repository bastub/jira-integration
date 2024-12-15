const encode = require("base-64").encode;
const dotenv = require("dotenv");
dotenv.config();

// Get all projects from the Jira account
async function getProjects() {
  try {
    var URL = process.env.baseURL + "/project/search";
    const response = await fetch(URL, {
      method: "get",
      headers: new Headers({
        Authorization:
          "Basic " + encode(process.env.mail + ":" + process.env.token),
      }),
    });
    const gets = await response.json();
    return gets;
  } catch (error) {
    console.error("Error in getProjects:", error.message);
    throw error;
  }
}

// Create a new issue on the Jira account
async function setIssue(req) {
  try {
    var URL = process.env.baseURL + "/issue";
    const response = await fetch(URL, {
      method: "post",
      headers: new Headers({
        Authorization:
          "Basic " + encode(process.env.mail + ":" + process.env.token),
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
      body: JSON.stringify(req),
    });
    const gets = await response.json();
    return gets;
  } catch (error) {
    console.error("Error in setIssue:", error.message);
    throw error;
  }
}

// get Issue types from a project
async function getIssueTypeFromProject(projectId) {
  try {
    var URL =
      process.env.baseURL + "/issue/createmeta/" + projectId + "/issuetypes";
    const response = await fetch(URL, {
      method: "get",
      headers: new Headers({
        Authorization:
          "Basic " + encode(process.env.mail + ":" + process.env.token),
      }),
    });
    const gets = await response.json();

    return gets;
  } catch (error) {
    console.error("Error in getIssueTypeFromProject:", error.message);
    throw error;
  }
}

// get Issue type details
async function getIssueTypeDetail(projectId, issueTypeId) {
  try {
    var URL =
      process.env.baseURL +
      "/issue/createmeta/" +
      projectId +
      "/issuetypes/" +
      issueTypeId;
    const response = await fetch(URL, {
      method: "get",
      headers: new Headers({
        Authorization:
          "Basic " + encode(process.env.mail + ":" + process.env.token),
      }),
    });
    const gets = await response.json();
    return gets;
  } catch (error) {
    console.error("Error in getIssueTypeDetail:", error.message);
    throw error;
  }
}

module.exports = {
  getProjects,
  setIssue,
  getIssueTypeFromProject,
  getIssueTypeDetail,
};
