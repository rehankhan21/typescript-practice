"use strict";
const button = document.querySelector("button");
// ! means value cant be null and as is called type casting
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
// add + to turn values in numbers
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
//# sourceMappingURL=ts-concat.js.map