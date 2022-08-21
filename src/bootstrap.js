import { InvalidInputError } from '#Errors/invalidInputError.js';
import { InvalidOperationError } from '#Errors/invalidOperationError.js';
import { extractByRegex } from '#Lib/extractByRegex.js';
import { operations } from '#Lib/makeOperation.js';
import { promptQuestion } from '#Lib/promptQuestion.js';

export const bootstrap = async () => {
  try {
    // 1 Capture entry
    const userAnswer = await promptQuestion(
      'Introduce your action or operation:\n'
    );

    // 2 Validate entry and get all the elements of the operation
    const standardAnswer = userAnswer.trim().replaceAll(',', '.');

    if (!standardAnswer) throw new InvalidInputError();
    if (standardAnswer === 'exit') {
      return true;
      // process.exit(0);
    }

    const [firstOperating, operator, secondOperating] =
      extractByRegex(standardAnswer);

    // 3 Do the operation
    const result = operations[operator](firstOperating, secondOperating);

    if (isNaN(result) || !isFinite(result)) throw new InvalidOperationError();

    const roundedResult = Number(Math.round(result + 'e+5') + 'e-5');

    // 4 Display result
    console.log(`The result is: ${roundedResult}\n`);
  } catch (error) {
    if (
      error instanceof InvalidInputError ||
      error instanceof InvalidOperationError
    )
      console.log(`${error.message}\n`);
    else
      console.log(
        `Unexpected error: ${error.message}. Stack: ${error.stack}\n`
      );
  }
};
