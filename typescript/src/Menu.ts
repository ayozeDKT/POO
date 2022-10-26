import { Iphone } from './classes/Iphone';
import { herencia } from './inheritance'
export const Menu = [
  {
    name: 'Clases',
    method: () => {
      const myIphone = new Iphone( 'black', 100, 6 );
      myIphone.playGame();
      console.log( 'battery status', myIphone.bateryCapacity );
    }
  },
  {
    name: 'Herencia',
    method: herencia
  }
]