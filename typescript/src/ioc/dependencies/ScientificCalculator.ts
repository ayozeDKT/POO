import { CalculatorI } from './Calculator.interface';

export class ScientificCalculator implements CalculatorI {
  add = ( a: number, b: number ): number => a + b;
  substract = ( a: number, b: number ): number => a - b;
  multiply = ( a: number, b: number ): number => a * b;
  divide = ( a: number, b: number ): number => {
    if ( b === 0 ) {
      throw new Error( `Didive by 0 is not valid` )
    }
    return a / b;
  };

}