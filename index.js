const core = require("@actions/core");

try {
  const name = core.getInput("name");
  const message = `Hello, ${name}! Welcome to GitHub Actions.`;
  core.setOutput("message", message);
} catch (error) {
  core.setFailed(error.message);
}
