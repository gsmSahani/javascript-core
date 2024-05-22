//  Implement a function to reverse a string without using the built-in reverse() method.
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}

console.log(reverseString('gautam'));

// reverse the word by keeping the "u" at the same place
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (i === 3) {
      reversed += str[3];
    } else {
      reversed += str[i];
    }
  }
  return reversed;
}

console.log(reverseString("gautam"));
