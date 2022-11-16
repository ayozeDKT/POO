import { getDependency } from './ioc';
import { CalculatorI } from './dependencies/Calculator.interface';

export class Mobile {
  calculator: CalculatorI;

  constructor( calculator: CalculatorI = getDependency('calculator') ) {
    this.calculator = calculator;
  }
}