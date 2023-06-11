// unknown is better than any
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "mac";

// unknown needs an extra check if you want to store another variables
// value inside of it
if (typeof userInput === "string") userName = userInput;

// since an error is thrown this function NEVER returns anything
// better for code qauilty, can tell other devs this will never return anything
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError("error has occured", 500);
//
