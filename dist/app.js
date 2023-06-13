"use strict";
// Generics / Generic Types
// Array<T> syntax for generic types
// specify the types that are gunna go in the array
// this allows you to call string methods
// array knows whjat data it will store
const names = ["yo", "no"];
names[0].split(" ");
// promise knows what data it will return
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("this is done");
    }, 2000);
});
// better type safety with generic types
promise.then((data) => {
    data.split("");
});
//# sourceMappingURL=app.js.map