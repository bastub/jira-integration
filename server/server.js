const getIssueType = require("./jiraService").getIssueType;
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));

app.get("/api", async (req, res) => {
  try {
    data = await getIssueType();
    res.json({ dataMessage: data });
  } catch (error) {
    res.json({ errorMessage: error });
  }
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
