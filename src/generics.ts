// Generics / Generic Types
// Array<T> syntax for generic types
// specify the types that are gunna go in the array
// this allows you to call string methods
// array knows whjat data it will store
const names: Array<string> = ["yo", "no"];
names[0].split(" ");

// promise knows what data it will return
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this is done");
  }, 2000);
});

// better type safety with generic types
promise.then((data) => {
  data.split("");
});

// function merge<T, U>(objT: T, objB: U) {
//   return Object.assign(objT, objB);
// }

// // type scrip infers the type of the parameters based on the type of the things you send
// // as arguments
// const mergedObj = merge({ name: "Max", hobbies: ["yo"] }, { age: 30 });

// Type contraints
// we guarentee that when this function is called, it receives 2 objects
function merge<T extends object, U extends object>(objT: T, objB: U) {
  return Object.assign(objT, objB);
}

interface lengthy {
  length: number;
}

// doesnt matter what type of data is being sent to this function
// we made the interface to ensure we can call .length on our generic type T
// ending ensures TS knows this function is returing a value of type T and string
function countAndPrint<T extends lengthy>(element: T): [T, string] {
  let descText = "no value";
  if (element.length > 0) {
    descText = "Got a value";
  }
  // Tuple
  return [element, descText];
}

console.log(countAndPrint("ji there"));

// key of Contraint
// this is telling TS that U is going to be a key for the generic type of T
// which T is an object
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

extractAndConvert({ name: "max" }, "name");

// generic class
// we create a generic class that can be intiated as any type
// generic types lock in a type for the whole class when called,
// union type gives you more flexibility when classes are used.
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

// we instiate an obj of DataStorage of type string
const textStorage = new DataStorage<string>();
textStorage.addItem("yo");
textStorage.addItem("no");
textStorage.removeItem("yo");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

//const objStorage = new DataStorage<object>();

// Utilty Types
// Partial Type

interface Goal {
  title: string;
  desc: string;
}

function createGoal(title: string, desc: string): Goal {
  // turn this into a partial type so we can add the interface values later
  let goal: Partial<Goal> = {};
  goal.title = title;
  goal.desc = desc;
  // convert partial goal back to goal using type casting to follow our return type
  return goal as Goal;
}

// readonly type
// makes sure the value can only be read but never changed
const nam2es: Readonly<string[]> = ["uo", "oh"];
//nam2es.push("man");
