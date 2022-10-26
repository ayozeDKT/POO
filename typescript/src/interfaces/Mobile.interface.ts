export enum PhoneColors {
  black = 'black',
  white = 'white',
  green = 'green',
  blue = 'blue'
}

export interface MobileI {
  phoneNumber: string;
  battery: number;
  color: PhoneColors

  useCalculator: ( a: number, b: number ) => number;
}

