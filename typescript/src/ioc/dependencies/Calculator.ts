import { CalculatorI } from './Calculator.interface';

export class Calculator implements CalculatorI {
  add = ( a: number, b: number ): number => Math.round( a + b );
  substract = ( a: number, b: number ): number => Math.round( a - b );
  multiply = ( a: number, b: number ): number => Math.round( a * b );
  divide = ( a: number, b: number ): number => {
    if ( b === 0 ) {
      throw new Error( `Didive by 0 is not valid` )
    }
    return Math.round( a / b );
  };

}