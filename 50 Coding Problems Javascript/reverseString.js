// write a js program to reverse the string

// function reverseString(str) {
//   return (str = str.split("").reverse().join(""));
// }
// console.log(reverseString("gatuam"));

// Approcah 2: using for loop

// function reverseString(str) {
//   let reversedStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//   }
//   return reversedStr;
// }

// console.log(reverseString("mira"));

// Approach 3: Array.reduce()

function revString(str) {
  return str.split("").reduce((revString, char) => char + revString, "");
}
console.log(revString("shambhu"));
