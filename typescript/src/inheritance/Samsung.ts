import { Mobile } from './Mobile';
export class Samsumg extends Mobile {
  constructor() {
    super( 500 );
  }

  useDisccord( username: string ) {
    console.log( `Calling ${username} from disccord` );
    this.batteryCapacity -= 10;
  }

  downloadApp(appName: string): void {
      console.log('Store: Google play');
      super.downloadApp(appName)
  }
}