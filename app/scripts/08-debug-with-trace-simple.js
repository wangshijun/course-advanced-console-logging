// simple trace
function output() {
  const result = doSomeCalc(2, 3);
  console.log(JSON.stringify({ result }));
}

function doSomeCalc(a, b) {
  return doHalf(a + b);
}

function doHalf(num) {
  console.trace('my first trace', num);
  return num / 2;
}

function main() {
  output();
}

main();
