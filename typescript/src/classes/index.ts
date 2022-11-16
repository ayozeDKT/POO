import { Iphone } from "./Iphone";

export const clases = () => {
  const myIphone = new Iphone( 'black', 100, 6 );
  myIphone.playGame();
  console.log( 'battery status', myIphone.bateryCapacity );
}