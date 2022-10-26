import { Samsumg } from './Samsung';
import { Iphone } from './Iphone';

export const herencia = () => {
  const myIphone = new Iphone();
  const mySamsung = new Samsumg();

  console.log( 'Iphone test' );
  myIphone.call( '697345244' );
  myIphone.useFaceTime( 'Suso' );
  myIphone.downloadApp( 'Whatsapp' )

  console.log( '-----------------------------------------------------------' );

  console.log( 'Samsung test' );
  mySamsung.call( '697345244' );
  mySamsung.useDisccord( '@SusoForEver' );
  mySamsung.downloadApp( 'Whatsapp' );
}