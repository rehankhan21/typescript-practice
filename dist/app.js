"use strict";
// Decorators - meta programming
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// alot of decorators have functions with capital letters
// factory function
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
// people can use our decarator functions as like a library
// and use our decorator functions in their own program by using the @ sign
function WithTemplate(template, hookId) {
    return function (constructor) {
        console.log("template");
        const hookEl = document.getElementById(hookId);
        const p = new Person();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContent = p.name;
        }
    };
}
// Decorators can find your class even if you dont instatiante it
// renders bottom up, with template goes first then  logger
// creation of the decorator is top down, but the execution is bottom up
let Person = class Person {
    constructor() {
        this.name = "Max";
        console.log("makiong person objext");
    }
};
Person = __decorate([
    Logger("logging-person"),
    WithTemplate("<h1> my person object</h1>", "app")
], Person);
const pers = new Person();
console.log(pers);
//---
function Log(target, propertyName) {
    console.log("property decorator");
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log("accessor decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log("method decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log("parameter decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("invalid price");
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
//# sourceMappingURL=app.js.map