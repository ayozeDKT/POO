import { checkInterface } from "../checkInterface.js";
import { CalculatorI } from "./Calculator.interface.js";

export class ScientificCalculator {
  add = (a, b) => a + b;
  substract = (a, b) => a - b;
  multiply = (a, b) => a * b;
  divide = (a, b) => {
    if (b === 0) {
      throw new Error(`Didive by 0 is not valid`);
    }
    return a / b;
  };

  constructor() {
    checkInterface(CalculatorI, this);
  }
}
