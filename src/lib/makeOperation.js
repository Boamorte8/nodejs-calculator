import { InvalidOperationError } from '#Errors/invalidOperationError.js';

export const operations = {
  '+': (operand1, operand2) => operand1 + operand2,
  '-': (operand1, operand2) => operand1 - operand2,
  '*': (operand1, operand2) => operand1 * operand2,
  '/': (operand1, operand2) => {
    if (operand2 === 0) throw new InvalidOperationError();
    return operand1 / operand2;
  },
  '^': (operand1, operand2) => operand1 ^ operand2,
  log: (operand) => Math.log(operand),
  sqrt: (operand) => Math.sqrt(operand),
};
