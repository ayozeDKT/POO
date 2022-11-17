import { Samsung } from "./Samsung.js";
import { Iphone } from "./Iphone.js";

export const herencia = () => {
  const myIphone = new Iphone();
  const mySamsung = new Samsung();

  console.log("Iphone test");
  myIphone.call("697345244");
  myIphone.useFaceTime("Suso");
  myIphone.downloadApp("Whatsapp");

  console.log("-----------------------------------------------------------");

  console.log("Samsung test");
  mySamsung.call("697345244");
  mySamsung.useDisccord("@SusoForEver");
  mySamsung.downloadApp("Whatsapp");
};
