function add(a, b) {
  return a + b;
}
console.log(add(700, 86));

function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function increment(n) {
  return (n += 1);
}
console.log(increment(503));

function decrement(n) {
  return (n -= 1);
}
console.log(decrement(913));

function makeInt(n) {
  return parseInt(n, 10);
}

function preserveDecimal(n) {
  return parseFloat(n);
}
