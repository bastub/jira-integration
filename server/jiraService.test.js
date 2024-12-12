const getIssueType = require("./jiraService");
test("Test", async () => {
  const data = await getIssueType();
  expect(data).toBe("test");
});
