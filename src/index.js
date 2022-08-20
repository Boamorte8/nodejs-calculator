import { BINARY_OPERATORS } from '#Constants/operators.js';
import { InvalidInputError } from '#Errors/invalidInputError.js';
import { getBinaryOperatings, getUnaryOperatings } from '#Lib/getOperatings.js';
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
    console.log(firstOperating, secondOperating);
  } catch (error) {
    if (error instanceof InvalidInputError) console.log(error.message);
    else
      console.log(`Unexpected error: ${error.message}. Stack: ${error.stack}`);
  }

  // 3 Do the operation
  // 4 Display result
  // console.log('standardAnswer', standardAnswer);
  // if (standardAnswer === 'exit') {
  //   process.exit(0);
  // }
})();
