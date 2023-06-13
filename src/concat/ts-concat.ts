const button = document.querySelector("button")!;
// ! means value cant be null and as is called type casting
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}
// add + to turn values in numbers
button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
