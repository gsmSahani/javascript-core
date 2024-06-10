// currying example
// curring means
// currying means it transform a function with multiple arguments into a nested series of functions
// each taking single arguments instead of taking multiple arguments at a single time like normal functions
// it helps you to avoid passing same variable multiple times and helps you to create HOF

// example normal function
function sum(a, b, c) {
  return a + b + c;
}
// sum(1,2,3);
console.log(sum(10, 20, 30));

// lets create the curried version of it
const sum1 = sum(1);
const sum2 = sum1(2);
const result = sum2(3);

function result(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
console.log(result);
