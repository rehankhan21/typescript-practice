// Decorators - meta programming

// alot of decorators have functions with capital letters
// factory function
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// people can use our decarator functions as like a library
// and use our decorator functions in their own program by using the @ sign
function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        // this makes it so the decorater only gets rendered when the class is instiated
        // when a class extends another class, we have to use the super keyword
        super(); // this is the original class
        // replaced it with the new custom class
        console.log("template");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

// Decorators can find your class even if you dont instatiante it
// renders bottom up, with template goes first then  logger
// creation of the decorator is top down, but the execution is bottom up
@Logger("logging-person")
@WithTemplate("<h1> my person object</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("makiong person objext");
  }
}

const pers = new Person();

console.log(pers);

//---

function Log(target: any, propertyName: string | Symbol) {
  console.log("property decorator");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("accessor decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("method decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("parameter decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("invalid price");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}
// Log 2 and 3 can use whats returned by the decorator but Log 1 and 4 cant

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      // this refers to watever is trigering the getter method
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };

  return adjDescriptor;
}

class Printer {
  message = "this works";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button1 = document.querySelector("button")!;
button1.addEventListener("click", p.showMessage);
