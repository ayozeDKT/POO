import { Mobile } from './Mobile';
import { PC } from './PC';
import { Calculator } from './Calculator';

export const ioc1 = () => {
  const calculator = new Calculator();

  const myPhone = new Mobile( calculator );
  const myPC = new PC( calculator );

  console.log( 'Add 4 + 5 with mobile', myPhone.calculator.add( 4, 5 ) )
  console.log( 'Substract 9 - 5 with pc', myPC.calculator.substract( 9, 5 ) )
  console.log( 'Multiply 2 * 3 with calculator', calculator.multiply( 2, 3 ) )
}