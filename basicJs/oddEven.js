function oddEven(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
const number = 10;

console.log(`${number} is ${oddEven(number)} number`);

// 2nd approach
// using arrow function with template literals by the help of ternary operator

const checkOddEven = (number) => {
  return number % 2 === 0 ? `is Even` : `is Odd`;
};
const number2 = 3;
console.log(`${number2} is ${checkOddEven(number2)} number`);
