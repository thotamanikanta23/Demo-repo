const core = require('@actions/core');

async function run() {
  try {
    // Get the input 'name' from the workflow
    const name = core.getInput('name');
    
    // Create the greeting message
    const greeting = `Hello, ${name}! Welcome to the workflow!`;

    // Output the greeting
    core.setOutput('greeting', greeting);
    console.log(greeting);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
