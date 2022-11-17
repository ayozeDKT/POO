import { getDependency } from "./ioc.js";

export class PC {
  calculator;

  constructor(calculator = getDependency("calculator")) {
    this.calculator = calculator;
  }
}
