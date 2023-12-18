// TASK
// function foo() {
//   return { bar: 1 };
// }

// console.log(typeof foo().bar);

// TASK
// let name = 'John';
// function printName() {
//   let name = 'Peter';
//   console.log(name);
// }
// printName();

// TASK
// for (var i = 0; i < 10; i++) {
//   let x = 0;
// }

// console.log(i);

// // TASK
// console.log(message);
// var message = 'Hello';

// TASK
// var a = 1,
//   b = function a(x) {
//     x && a(--x);
//   };
// console.log(a);

// TASK
// let f = function g() {
//   return 23;
// };
// console.log(typeof g());

// TASK
// var name = 'John';

// function printName() {
//   console.log(name);
//   var name = 'Peter';
//   console.log(name);
// }

// printName();

// // TASK
// function foo() {
//   console.log(this);
// }
// foo.call(null);

// TASK
// console.log(message);
// let message = 'Hello';

// TASK
// var name = 'John';
// var user = {
//   name: 'Peter',
//   printMessage() {
//     console.log(`Hello, ${this.name}!`);
//   },
// };

// var printMessage = user.printMessage;
// printMessage();

// TASK
// 'use strict';
// const details = {
//   message: 'Hello!',
// };

// function getMessage() {
//   return this.message;
// }

// console.log(getMessage.call(details));

// TASK
// const foo = bar();
// const number = 2;
// function bar() {
//   return number;
// }

// TASK
// function getThis() {
//   return this;
// }
// console.log(getThis());

// TASK
// 'use strict';
// function getThis() {
//   return this;
// }
// console.log(getThis());

// TASK
// printMessage();
// function printMessage() {
//   console.log('Hello!');
// }

// TASK
// function foo() {
//   console.log(Function.getArguments(this));
// }

// function foo() {
//   console.log(arguments);
// }

// function foo() {
//   console.log(foo.getArguments());
// }

// function foo() {
//   console.log(this.arguments);
// }

// foo(1, 2);

// TASK
// let name = 'John';
// function printName() {
//   console.log(name);
// }

// setTimeout(() => {
//   let name = 'Peter';
//   printName();
// }, 1000);

// TASK
// (function (a) {
//   arguments[0] = 10;
//   console.log(a);
//   return a;
// })(5);

// TASK
// function foo(a, b) {
//   return a * b;
// }

// const bar = foo.bind(null, 2);
// console.log(bar(2));

// TASK
// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// TASK
// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// TASK
// const details = {
//   name: 'John',
// };

// function getMessage(message) {
//   return `${message} ${this.name}`;
// }

// console.log(getMessage.apply(details, ['Hello']));

// // TASK
// let f = function (a, b) {
//   return a + b;
// };

// console.log(f(7, 8));
