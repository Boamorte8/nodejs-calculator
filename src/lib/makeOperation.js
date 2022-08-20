export const operations = {
  '+': (operand1, operand2) => operand1 + operand2,
  '-': (operand1, operand2) => operand1 - operand2,
  '*': (operand1, operand2) => operand1 * operand2,
  '/': (operand1, operand2) => operand1 / operand2,
  '^': (operand1, operand2) => operand1 ^ operand2,
  log: (operand) => Math.log10(operand),
  sqrt: (operand) => Math.sqrt(operand),
};
