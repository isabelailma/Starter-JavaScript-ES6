"use strict";

function soma(a, b) {
  return a + b;
}

console.log(soma(1)); // NaN

console.log(soma()); // NaN
// Definindo valor padrão

function soma2() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
}

console.log(soma2(1)); // 7

console.log(soma2()); // 9
// Com arrow function

var soma3 = function soma3() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(soma3(1)); // 7

console.log(soma3()); // 9
