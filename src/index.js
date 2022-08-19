import { BINARY_OPERATORS } from '#Constants/operators.js';
import { InvalidInputError } from '#Errors/invalidInputError.js';
import { getOperator } from '#Lib/getOperator.js';
import { promptQuestion } from '#Lib/promptQuestion.js';

(async () => {
  try {
    // 1 Capture entry
    const userAnswer = await promptQuestion(
      'Introduce your action or operation:\n'
    );

    // 2 Validate entry and get all the elements of the operation
    const standardAnswer = userAnswer.trim();

    if (standardAnswer === 'exit') {
      process.exit(0);
    }

    if (standardAnswer === '') throw new InvalidInputError();

    const operator = getOperator(standardAnswer);

    if (BINARY_OPERATORS.includes(operator)) {
      const operands = standardAnswer.split(operator).map((operand) => {
        const trimmedOperand = operand.trim();
        if (isNaN(trimmedOperand)) {
          throw new InvalidInputError();
        }
        return +trimmedOperand;
      });
      console.log(operands);
      if (operands.length !== 2) throw new InvalidInputError();
    }

    if (!operator) throw new InvalidInputError();
  } catch (error) {
    if (error instanceof InvalidInputError) console.log(error.message);
    else
      console.log(`Unexpected error: ${error.message}. Stack: ${error.stack}`);
  }

  // 3 Do the operation
  // 4 Display result
  // console.log('standardAnswer', standardAnswer);
})();
