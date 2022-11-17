export class Mobile {
  constructor(batteryCapacity) {
    this.batteryCapacity = batteryCapacity;
    this.isConnected = true;
  }

  call(phoneNumber) {
    console.log(`Calling to ${phoneNumber}...`);
  }

  downloadApp(appName) {
    console.log(`downloading App ${appName}...`);
    console.log("now battery is lower");
    this.batteryCapacity -= 1;
  }
}
