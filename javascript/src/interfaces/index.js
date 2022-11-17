import { PhoneColors } from "./Mobile.interface.js";
import { Mobile } from "./Mobile.js";

export const interfaces = () => {
  // TODO: comprobar la interfaz cambiando los valores de aqui
  const MyPhone = new Mobile("685234522", 75, PhoneColors.blue);

  console.log("My phone number is ", MyPhone.phoneNumber);
  console.log(`My phone battery is at ${MyPhone.battery}%`);
  console.log("My phone is ", MyPhone.color);
  console.log(
    "Usins my phone calculator to sum 3 + 5",
    MyPhone.useCalculator(3, 5)
  );
};
