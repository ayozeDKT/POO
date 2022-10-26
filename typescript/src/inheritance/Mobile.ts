export class Mobile {
  batteryCapacity: number;
  isConnected: boolean = true;

  constructor( batteryCapacity: number ) {
    this.batteryCapacity = batteryCapacity;
  }

  call( phoneNumber: string ) {
    console.log( `Calling to ${phoneNumber}...` );
  }

  downloadApp( appName: string ) {
    console.log( `downloading App ${appName}...` );
    console.log( 'now battery is lower' );
    this.batteryCapacity -= 1;
  }
}