// @ts-check
// type Vehicle = {
//   make: string,
//   model: string,
//   wheels: number,
// }
class NCycle <T> {
      
  make: T | T[];
  model: T | T[];
  wheels: number;
  
  status: "stopped" | "started" = "stopped";
  
    constructor(make, model, wheels) {
      this.make = make;
      this.model = model;
      this.wheels = wheels;
    }
    start() {
      this.status = "started";
    }
    stop() {
      this.status = "stopped";
    }

    print(num = 0) {
     if(typeof this.make === "string"){
      console.log(`This is a ${this.make, this.model} NCylcle`)
     } else {
      console.log(`This is a ${this.make, this.model} at ${num} NCylcle`)
     }
       return num; 
    }

    printAll(){
      if(typeof this.make === "string"){
        console.log(`This is a ${this.make, this.model} NCylcle`)
       } else {
        console.log(`This is a ${this.make, this.model} at NCylcle`)
       }
        
      }
  
}

// const testCycle1 = new NCycle<number>(1, 2, 3);
// testCycle1.print();
// testCycle1.printAll();

const testCycle2 = new NCycle<string>("This", "That", 4);
testCycle2.print();
testCycle2.printAll();


 class Vehicle {
    
  make: string;
  model: string;
  wheels: number;
  
  status: "stopped" | "started" = "stopped";
  
    constructor(make, model, wheels) {
      this.make = make;
      this.model = model;
      this.wheels = wheels;
    }
    start() {
      this.status = "started";
    }
    stop() {
      this.status = "stopped";
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model) {
      super(make, model, 4);
    }
  }
  
  // const car1 = new Car("Kia", "Soul")
  //console.log(car1);

  class MotorCycle extends Vehicle {
    constructor(make, model) {
      super(make, model, 2);
    }
  }
  
  function printStatus(vehicle: Vehicle) {
    if (vehicle.status === "started") {
      console.log("The vehicle is running.");
    } else {
      console.log("The vehicle is stopped.");
    }
  }
  
  const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
  myHarley.start();
  printStatus(myHarley);
  console.log(myHarley.make.toUpperCase());
  
  const myBuick = new Car("Buick", "Regal");
  myBuick.wheels = myBuick.wheels - 1;
  console.log(myBuick.wheels);
  console.log(myBuick.model);
  