export class Iphone {
  color: string;
  bateryCapacity: number;
  screenSize: number;

  constructor( color: string, bateryCapacity: number, screenSize: number ) {
    this.color = color;
    this.bateryCapacity = bateryCapacity;
    this.screenSize = screenSize;
  }

  playGame() { 
    console.log('playing game...');
    console.log('now battery is lower');
    this.bateryCapacity -= 30;
  }
}
