import { InvalidInputError } from '#Errors/invalidInputError.js';
import { getOperator } from '#Lib/getOperator.js';
import { promptQuestion } from '#Lib/promptQuestion.js';

(async () => {
  try {
    // 1 Capture entry
    const userAnswer = await promptQuestion(
      'Introduce your action or operation:\n'
    );

    // 2 Validate entry
    const standardAnswer = userAnswer.trim();

    if (standardAnswer === '') throw new InvalidInputError();

    const operator = getOperator(standardAnswer);

    if (!operator) throw new InvalidInputError();
  } catch (error) {
    if (error instanceof InvalidInputError) console.log(error.message);
    else
      console.log(`No handled error: ${error.message}. Stack: ${error.stack}`);
  }

  // 3 Do the operation
  // 4 Display result
  // console.log('standardAnswer', standardAnswer);
  // if (standardAnswer === 'exit') {
  //   process.exit(0);
  // }
})();
