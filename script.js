var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// @ts-check
// type Vehicle = {
//   make: string,
//   model: string,
//   wheels: number,
// }
var NCycle = /** @class */ (function () {
    function NCycle(make, model, wheels) {
        this.status = "stopped";
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    NCycle.prototype.start = function () {
        this.status = "started";
    };
    NCycle.prototype.stop = function () {
        this.status = "stopped";
    };
    NCycle.prototype.print = function (num) {
        if (num === void 0) { num = 0; }
        if (typeof this.make === "string") {
            console.log("This is a ".concat((this.make, this.model), " NCylcle"));
        }
        else {
            console.log("This is a ".concat((this.make, this.model), " at ").concat(num, " NCylcle"));
        }
        return num;
    };
    NCycle.prototype.printAll = function () {
        if (typeof this.make === "string") {
            console.log("This is a ".concat((this.make, this.model), " NCylcle"));
        }
        else {
            console.log("This is a ".concat((this.make, this.model), " at NCylcle"));
        }
    };
    return NCycle;
}());
var testCycle1 = new NCycle(1, 2, 3);
testCycle1.print();
testCycle1.printAll();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, wheels) {
        this.status = "stopped";
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    Vehicle.prototype.start = function () {
        this.status = "started";
    };
    Vehicle.prototype.stop = function () {
        this.status = "stopped";
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model) {
        return _super.call(this, make, model, 4) || this;
    }
    return Car;
}(Vehicle));
// const car1 = new Car("Kia", "Soul")
//console.log(car1);
var MotorCycle = /** @class */ (function (_super) {
    __extends(MotorCycle, _super);
    function MotorCycle(make, model) {
        return _super.call(this, make, model, 2) || this;
    }
    return MotorCycle;
}(Vehicle));
function printStatus(vehicle) {
    if (vehicle.status === "started") {
        console.log("The vehicle is running.");
    }
    else {
        console.log("The vehicle is stopped.");
    }
}
var myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());
var myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);
