import { Iphone } from './classes/Iphone';
import { herencia } from './inheritance'
import { interfaces } from './interfaces'
import { ioc1 } from './ioc';

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
  },
  {
    name: 'Interfaz',
    method: interfaces
  },
  {
    name: 'IOC 1',
    method: ioc1
  }
]