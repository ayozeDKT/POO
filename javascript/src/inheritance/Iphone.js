import { Mobile } from "./Mobile.js";

export class Iphone extends Mobile {
  constructor() {
    super(300);
  }

  useFaceTime(username) {
    console.log(`Calling ${username} from facetime`);
    this.batteryCapacity -= 10;
  }

  downloadApp(appName) {
    console.log("Store: AppStore");
    super.downloadApp(appName);
  }
}
