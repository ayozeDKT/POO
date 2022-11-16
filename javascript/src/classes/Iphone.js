// ES6
export class Iphone {
  constructor(color, bateryCapacity, screenSize) {
    this.color = color;
    this.bateryCapacity = bateryCapacity;
    this.screenSize = screenSize;
  }

  playGame() {
    console.log("playing game...");
    console.log("now battery is lower");
    this.bateryCapacity -= 30;
  }
}

// ES5
export function Iphone13(color, bateryCapacity, screenSize) {
  this.color = color;
  this.bateryCapacity = bateryCapacity;
  this.screenSize = screenSize;
}

Iphone13.prototype.playGame = function() {
  console.log("playing game...");
  console.log("now battery is lower");
  this.bateryCapacity -= 30;
};