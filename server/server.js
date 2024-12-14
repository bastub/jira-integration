const { getIssueType, getProjects, setIssue } = require("./jiraService");
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(express.json());
app.use(cors(corsOptions));

// get issue types available on the Jira account
app.get("/api/issuetypes", async (req, res) => {
  try {
    const data = await getIssueType();
    res
      .status(200)
      .json({ success: true, message: "Data fetched successfully", data });
  } catch (error) {
    console.error("Error fetching issue types:", error);
    res.status(500).json({
      success: false,
      message: error.message || "An unknown error occurred",
    });
  }
});

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

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
