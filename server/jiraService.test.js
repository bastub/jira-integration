const { getProjects } = require("./jiraService");
test("Test", async () => {
  const data = await getProjects();
  expect(data).toBe("test");
});
