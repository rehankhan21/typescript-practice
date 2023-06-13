// intersection types
// not declaring an object but setting up a new type
// type Admin = {
//   name: string;
//   privilages: string[];
// };

// can also do this with interfaces

interface Admin {
  name: string;
  privilages: string[];
}

type Employee = {
  name: string;
  startDate: Date;
};

// interface Employee {
//     name: string;
//   startDate: Date;
// };

type ElevatedEmployee = Admin & Employee;

//interface ElevatedEmployee extends Employee

const e1: ElevatedEmployee = {
  name: "max",
  privilages: ["create-server"],
  startDate: new Date(),
};

// union types
type CombineU = string | number;
type Numeric = number | boolean;

// intersect type of union types
type Universal = CombineU & Numeric;

// Function Overlord aka polymorphism
// this is how you do function overlord in TS
// you add another function signature on top of ur normal function
// this tells TS that the function will take 2 numbers and return a number
//function addGuard(n: number): number;
function addGuard(a: number, b: number): number;
function addGuard(a: string, b: string): string;
function addGuard(a: CombineU, b: CombineU) {
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

type UnknownEmployee = Employee | Admin;

function printEmpInfo(emp: UnknownEmployee) {
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

  loadCargo(amount: number) {
    console.log("Loading cargo ... " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
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

//Discremenated Unions

interface Bird {
  // literal type which must hold a string with value of bird
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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
  (userInputEle as HTMLInputElement).value = "Hi there";
}

// index types

interface ErrorContainer {
  // {email: not a valid email, username: "error message"}
  // define an index type using [] instead of {}
  // every proper that is added with be a string
  // but I dont know how many properties that will be
  //id: string;
  // this is saying that the key and value being passed to this function
  // must be a string
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
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
const storedData = input ?? "Defualt";
console.log(storedData);
