import { checkInterface } from "./checkInterface.js";
import { MobileI, PhoneColors } from "./Mobile.interface.js";

export class Mobile {
  constructor(phoneNumber, battery, color) {
    this.phoneNumber = phoneNumber;
    this.battery = battery;
    this.color = color;

    checkInterface(MobileI, this);
  }

  useCalculator(a, b) {
    return a + b;
  }
}
