import { OPERATORS } from '#Constants/operators.js';
import { InvalidInputError } from '#Errors/invalidInputError.js';

export const getOperator = (answer) => {
  let operator;

  for (const allowedOperator of OPERATORS) {
    if (answer.includes(allowedOperator)) {
      if (
        operator ||
        answer.indexOf(allowedOperator) !== answer.lastIndexOf(allowedOperator)
      )
        throw new InvalidInputError();

      operator = allowedOperator;
    }
  }

  return operator;
};
