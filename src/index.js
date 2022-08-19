import { createInterface } from 'readline';

// 1 Capture entry
// 2 Validate entry
// 3 Do the operation
// 4 Display result

const consoleInterface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const handleAnswer = (answer) => {
  if (answer === 'exit') {
    process.exit(0);
  } else {
    askAction();
  }
};

const askAction = () => {
  consoleInterface.question(
    'Introduce your action or operation\n',
    handleAnswer
  );
};

askAction();
