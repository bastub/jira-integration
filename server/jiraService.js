const encode = require("base-64").encode;
const dotenv = require("dotenv");
dotenv.config();

// Get all issue types from the Jira account
async function getIssueType() {
  try {
    var URL = process.env.baseURL + "/issuetype";
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
    console.error("Error in getIssueType:", error.message);
    throw error;
  }
}

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

module.exports = { getIssueType, getProjects, setIssue };
