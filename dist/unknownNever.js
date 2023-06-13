"use strict";
// unknown is better than any
let userInput;
let userName;
userInput = 5;
userInput = "mac";
// unknown needs an extra check if you want to store another variables
// value inside of it
if (typeof userInput === "string")
    userName = userInput;
// since an error is thrown this function NEVER returns anything
// better for code qauilty, can tell other devs this will never return anything
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
//const result = generateError("error has occured", 500);
//
//# sourceMappingURL=unknownNever.js.map