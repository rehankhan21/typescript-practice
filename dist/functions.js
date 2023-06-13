"use strict";
// let typescript infer the return type rather
// rather than setting it yourself, if u dont have too
function add1(n1, n2) {
    return n1 + n2;
}
// Typescript can use the void type like other languages
// use void if the funxtion return nothing
// if u use undefined, typescript expects you to return something of type undefined
function printResult(num) {
    console.log("Result: " + num);
}
// givign the call back funtion a function type
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add1(5, 12));
// can declare variables of type function
// this means that only functions can be stored in the varibale.
// let combinedValues: Function;
// we use arrow function syntax to be more specifc on what function type
// we want the varibale to take.
// in this case we want combined values to only take a function wit a
// return type of number and 2 number parameters.
let combinedValues;
combinedValues = add;
//combinedValues = printResult;
//combinedValues = 6;
console.log(combinedValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
//# sourceMappingURL=functions.js.map