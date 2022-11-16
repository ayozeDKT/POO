import { getDependency } from './ioc';
import { CalculatorI } from './dependencies/Calculator.interface';

export class PC {
  calculator: CalculatorI;

  constructor( calculator: CalculatorI = getDependency( 'calculator' ) ) {
    this.calculator = calculator;
  }
}