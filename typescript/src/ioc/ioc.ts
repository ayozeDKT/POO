import { ScientificCalculator } from './dependencies/ScientificCalculator';
import { Calculator } from './dependencies/Calculator';

export const iocName = {
  calculator: 'calculator',
}

// TODO: Cambiar la calculadora para ver la diferencia
const iocEngine = {
  [iocName.calculator]: () => new ScientificCalculator(),
  // [iocName.calculator]: () => new Calculator(),
}

export const getDependency = ( dependency: string ) => iocEngine[dependency]();