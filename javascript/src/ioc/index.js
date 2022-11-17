import { Mobile } from "./Mobile.js";
import { PC } from "./PC.js";
import { Calculator } from "./dependencies/Calculator.js";

export const ioc1 = () => {
  const calculator = new Calculator();

  const myPhone = new Mobile(calculator);
  const myPC = new PC(calculator);

  console.log("Add 4 + 5 with mobile", myPhone.calculator.add(4, 5));
  console.log("Substract 9 - 5 with pc", myPC.calculator.substract(9, 5));
  console.log("Multiply 2 * 3 with calculator", calculator.multiply(2, 3));
};

export const ioc2 = () => {
  const myPhone = new Mobile();
  const myPC = new PC();

  console.log("Add 4 + 5 with mobile", myPhone.calculator.add(4.4, 5.2));
  console.log("Substract 9 - 5 with pc", myPC.calculator.substract(9.2, 5.4));
};
