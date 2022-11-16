import { Iphone, Iphone13 } from "./Iphone.js";

export const clases = () => {
  console.log("ES6 method");
  const myIphone = new Iphone("black", 100, 6);
  myIphone.playGame();
  console.log("battery status", myIphone.bateryCapacity);

  console.log("\nES5 method");

  const myIphone13 = new Iphone13("red", 75, 6);
  myIphone13.playGame();
  console.log("battery status", myIphone13.bateryCapacity);
};
