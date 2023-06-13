"use strict";
// intersection types
// not declaring an object but setting up a new type
// type Admin = {
//   name: string;
//   privilages: string[];
// };
//interface ElevatedEmployee extends Employee
const e1 = {
    name: "max",
    privilages: ["create-server"],
    startDate: new Date(),
};
function addGuard(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
// even though addGuard returns a string, typescript still doesnt know
// if result2 is a number or a string
// you can use type casting to tell typescript its a string or numebr
// const result2 = addGuard("yo", "yo") as string;
// this allows you to use string methods on the variable now
// result2.split(" ");
const result2 = addGuard("yo", "yo");
function printEmpInfo(emp) {
    // if we check typeof emp, it will just give us an object
    // so we wont know if its type of employee or admin
    // this is another way of type guarding
    if ("privileges" in emp) {
        console.log("Privileges " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log(emp.startDate);
    }
    console.log("name " + emp.name);
}
printEmpInfo(e1);
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("Loading cargo ... " + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    //   if ("loadCargo" in vehicle) {
    //     vehicle.loadCargo(1000);
    //   }
    // similar to typeof but checks if its an instance of a class
    // it knows constructor functions
    // cant be used with interfaces becuase they arent complied into an js code
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving speed " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
// type casting
// 2 ways of type casting
// this tells typescript what type of element this is
//const userInputEle = <HTMLInputElement>document.getElementById("yo");
// <> syntax is how you write jsx in React
// inorder not to clash with that you can also use the as kwyword
// const userInputEle = document.getElementById("yo")! as HTMLInputElement;
const userInputEle = document.getElementById("yo");
// instead of using ! to tell type script something will not be null
// we can aslo use truthy falsey like this
if (userInputEle) {
    userInputEle.value = "Hi there";
}
const errorBag = {
    // key and value must be string
    email: "Not a valid email",
    userName: "must start with a capital character",
};
// nullish Coalescing
// this makes it so if in the optional chaining the value ends up being null
// you store a defualt value instead of it leaving it null
const input = null;
// ?? is the nullish coalescing operator
// this says if its not just null but also undefined then go to the defualt value
const storedData = input !== null && input !== void 0 ? input : "Defualt";
console.log(storedData);
//# sourceMappingURL=advanced-types.js.map