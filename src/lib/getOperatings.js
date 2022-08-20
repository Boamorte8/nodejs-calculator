import { InvalidInputError } from '#Errors/invalidInputError.js';

export const getBinaryOperatings = ([leftSide, rightSide]) => {
  if (!leftSide || !rightSide) throw new InvalidInputError();
  const firstOperating = +leftSide.replaceAll(',', '.');
  const secondOperating = +rightSide.replaceAll(',', '.');
  if (
    isNaN(firstOperating) ||
    isNaN(secondOperating) ||
    !isFinite(firstOperating) ||
    !isFinite(secondOperating)
  )
    throw new InvalidInputError();
  return [firstOperating, secondOperating];
};

export const getUnaryOperatings = ([leftSide, rightSide]) => {
  if (leftSide || !rightSide) throw new InvalidInputError();
  if (!rightSide.startsWith('(') || !rightSide.endsWith(')'))
    throw new InvalidInputError();
  const firstOperating = +rightSide
    .slice(1, rightSide.length - 1)
    .replaceAll(',', '.');
  if (isNaN(firstOperating) || !isFinite(firstOperating))
    throw new InvalidInputError();
  return [firstOperating];
};
