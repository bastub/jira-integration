const { getIssueType, getFields } = require("./jiraService");
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));

app.get("/api/issuetypes", async (req, res) => {
  try {
    console.log("Calling getIssueType...");
    const data = await getIssueType();
    console.log("getIssueType returned:", data);
    res.json({ status: "success", data: data });
  } catch (error) {
    console.error("Error in /api route:", error);
    res.json({
      status: "failure",
      errorMessage: error.message || "Unknown error",
    });
  }
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
