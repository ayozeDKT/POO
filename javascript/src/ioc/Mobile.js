import { getDependency } from "./ioc.js";

export class Mobile {
  constructor(calculator = getDependency("calculator")) {
    this.calculator = calculator;
  }
}
