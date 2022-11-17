import { checkInterface } from "./checkInterface.js";
import { CalculatorI } from "./dependencies/Calculator.interface.js";
import { ScientificCalculator } from "./dependencies/ScientificCalculator.js";
// import { Calculator } from "./dependencies/Calculator.js";

export const iocName = {
  calculator: "calculator",
};

// TODO: Cambiar la calculadora para ver la diferencia
const iocEngine = {
  [iocName.calculator]: () => new ScientificCalculator(),
  // [iocName.calculator]: () => new Calculator(),
};

export const getDependency = (dependency) => iocEngine[dependency]();
