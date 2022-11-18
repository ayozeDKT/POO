const MobileI = Object.freeze({
  color: (param) => typeof param === 'string',
  size: (param) => typeof param === 'number',
  callToNumber: (param) => typeof param === 'function'
});

const checkInterface = (interface, Class) => {
  Object.entries(interface).forEach(([param, checker]) => {
    if(!checker(Class[param])){
      throw new Error(`Class must to implement interface sign`);
    }
  })
}

function implements(interface) {
  return function(Class) {
    return function (...args) {
      const x = new Class(...args) 
      checkInterface(interface, x);
      return x;
    }
  }  
}


@implements(MobileI)
class Mobile {
  constructor(color = 'red', size = 4){
    this.color = color;
    this.size = size;
  }
  
  callToNumber(phoneNumber){
    console.log(`Calling to ${phoneNumber}`)
  }
}

const myMobile = new Mobile();
console.log(myMobile.color)