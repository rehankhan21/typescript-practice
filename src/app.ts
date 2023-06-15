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
