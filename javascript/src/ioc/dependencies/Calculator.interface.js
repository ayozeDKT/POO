const functionChecker = (param) => {
  const value = typeof param === "function";
  console.log(param);
  if (!value) {
    throw new Error(`Expected function type, but it has ${typeof param} type`);
  }
  return value;
};

export const CalculatorI = Object.freeze({
  add: functionChecker,
  substract: functionChecker,
  multiply: functionChecker,
  divide: functionChecker,
});
