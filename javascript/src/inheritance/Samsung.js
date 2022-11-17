import { Mobile } from "./Mobile.js";

export class Samsung extends Mobile {
  constructor() {
    super(500);
  }

  useDisccord(username) {
    console.log(`Calling ${username} from disccord`);
    this.batteryCapacity -= 10;
  }

  downloadApp(appName) {
    console.log("Store: Google play");
    super.downloadApp(appName);
  }
}
