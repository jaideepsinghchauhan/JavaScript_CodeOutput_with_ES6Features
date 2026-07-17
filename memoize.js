function lazySquare(num1, num2) {
  for (let i = 0; i < 10000000; i++) {}
  return num1 * num2;
}


function memoize(fn) {
  const obj = {};
  return function (...args) {
    const cacheArgs = JSON.stringify(args);
    if (!obj[cacheArgs]) obj[cacheArgs] = fn.call(this, ...args);

    return obj[cacheArgs];
  };
}

const memoizeFun = memoize(lazySquare);

console.time("firstCall");
console.log(memoizeFun(10, 15));
console.timeEnd("firstCall");

console.time("secondCall");
console.log(memoizeFun(10, 15));
console.timeEnd("secondCall");

// key points to note, use spread operator in fn.call
//console.time should have same parameter for first pair and second pair
// remember to do JSON.stringify and ...args inside inner function
// we can send separate context as well and second parameter next to fn as context. 