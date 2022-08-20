import { BINARY_OPERATORS } from '#Constants/operators.js';
import { InvalidInputError } from '#Errors/invalidInputError.js';
import { InvalidOperationError } from '#Errors/invalidOperationError.js';
import { getBinaryOperatings, getUnaryOperatings } from '#Lib/getOperatings.js';
import { getOperator } from '#Lib/getOperator.js';
import { operations } from '#Lib/makeOperation.js';
import { promptQuestion } from '#Lib/promptQuestion.js';

export const bootstrap = async () => {
  try {
    // 1 Capture entry
    const userAnswer = await promptQuestion(
      'Introduce your action or operation:\n'
    );

    // 2 Validate entry and get all the elements of the operation
    const standardAnswer = userAnswer.trim();

    if (standardAnswer === 'exit') {
      return true;
      // process.exit(0);
    }

    if (!standardAnswer) throw new InvalidInputError();

    const operator = getOperator(standardAnswer);

    if (!operator) throw new InvalidInputError();

    const operands = standardAnswer.split(operator);

    let firstOperating, secondOperating;
    if (BINARY_OPERATORS.includes(operator)) {
      [firstOperating, secondOperating] = getBinaryOperatings(operands);
    } else {
      [firstOperating] = getUnaryOperatings(operands);
    }

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
