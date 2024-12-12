const encode = require("base-64").encode;
const dotenv = require("dotenv");
dotenv.config();

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

async function getFields() {
  try {
    var URL = process.env.baseURL + "/field";
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
    console.error("Error in getFields:", error.message);
    throw error;
  }
}

module.exports = { getIssueType, getFields };
