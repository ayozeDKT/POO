import { Mobile } from './Mobile';
export class Iphone extends Mobile {
  constructor() {
    super( 300 );
  }

  useFaceTime( username: string ) {
    console.log( `Calling ${username} from facetime` );
    this.batteryCapacity -= 10;
  }

  downloadApp( appName: string ): void {
    console.log( 'Store: AppStore' );
    super.downloadApp( appName );
  }
}