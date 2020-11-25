function expression(num) {
  return function (operation) {
    return operation ? operation(num) : num;
  };
}

const zero = expression(0);
const one = expression(1);
const two = expression(2);
const three = expression(3);
const four = expression(4);
const five = expression(5);
const six = expression(6);
const seven = expression(7);
const eight = expression(8);
const nine = expression(9);

function plus(x) {
  return function (y) {
    return x + y;
  };
}
function minus(x) {
  return function (y) {
    return y - x;
  };
}
function times(x) {
  return function (y) {
    return x * y;
  };
}
function dividedBy(x) {
  return function (y) {
    return parseInt(y / x);
  };
}

console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
