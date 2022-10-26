import { MobileI, PhoneColors } from "./Mobile.interface";


export class Mobile implements MobileI {
  phoneNumber!: string;
  battery!: number;
  color!: PhoneColors;

  constructor( phoneNumber: string, battery: number, color: PhoneColors ) {
    this.phoneNumber = phoneNumber;
    this.battery = battery;
    this.color = color;
  }

  useCalculator( a: number, b: number ): number {
    return a + b;
  };
}
