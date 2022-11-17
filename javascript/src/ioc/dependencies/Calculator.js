import { checkInterface } from "../checkInterface.js";
import { CalculatorI } from "./Calculator.interface.js";

export class Calculator {
  add = (a, b) => Math.round(a + b);
  substract = (a, b) => Math.round(a - b);
  multiply = (a, b) => Math.round(a * b);
  divide = (a, b) => {
    if (b === 0) {
      throw new Error(`Didive by 0 is not valid`);
    }
    return Math.round(a / b);
  };

  constructor() {
    checkInterface(CalculatorI, this);
  }
}
