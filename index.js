const core = require('@actions/core');

async function run() {
  try {
    // Get the 'name' input from the workflow
    const name = core.getInput('name'); // Input is required in 'action.yml'
    
    // Check if the name input is provided
    if (!name) {
      core.setFailed('Name input is required!');
      return;
    }

    // Create the greeting message
    const greeting = `Hello, ${name}! Welcome to the workflow!`;

    // Set the output to be used later in the workflow
    core.setOutput('greeting', greeting);
    
    // Log the greeting message
    console.log(greeting);

  } catch (error) {
    // If there's an error, set the action to 'failed'
    core.setFailed(`Action failed: ${error.message}`);
  }
}

// Run the function
run();
