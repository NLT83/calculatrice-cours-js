// projet calculatrice cours JS

let total = 0;

function addition(x) {
  total += x;
  return total;
}
function soustraction(x) {
  total -= x;
  return total;
}
function multiplication(x) {
  total *= x;
  return total;
}
function division(x) {
  total /= x;
  return total;
}

function reset() {
  total = 0;
}
