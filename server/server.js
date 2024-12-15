const {
  getProjects,
  setIssue,
  getIssueTypeFromProject,
  getIssueTypeDetail,
} = require("./jiraService");
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(express.json());
app.use(cors(corsOptions));

// get projects available on the Jira account
app.get("/api/projects", async (req, res) => {
  try {
    const data = await getProjects();
    res.json({ data: data });
  } catch (error) {
    res.json({
      errorMessage: error.message || "Unknown error",
    });
  }
});

// create a new issue on the Jira account
app.post("/api/issue", async (req, res) => {
  try {
    const data = await setIssue(req.body);
    res.json({ data: data });
  } catch (error) {
    res.json({
      errorMessage: error.message || "Unknown error",
    });
  }
});

// get issue types from a project
app.get("/api/issuetypes/:projectId", async (req, res) => {
  try {
    const data = await getIssueTypeFromProject(req.params.projectId);
    res.json({ data: data });
  } catch (error) {
    res.json({
      errorMessage: error.message || "Unknown error",
    });
  }
});

// get issue type details
app.get("/api/issuetypesdetail/:projectId/:issueTypeId", async (req, res) => {
  try {
    const data = await getIssueTypeDetail(
      req.params.projectId,
      req.params.issueTypeId
    );
    res.json({ data: data });
  } catch (error) {
    res.json({
      errorMessage: error.message || "Unknown error",
    });
  }
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
