// js program to count the vowels in the given string
// we are using 5 approach

// Approach 1: Using for loop with regular expression
// function countVowelString(str) {
//   let count = 0;
//   const vowels = /[aeiouAEIOU]/;

//   for (let char of str) {
//     if (vowels.test(char)) {
//       count++;
//     }
//   }
//   return count;
// }
// const demoString = "Gautam Sahani";
// const break1 = demoString.split("");
// console.log(break1);
// console.log(countVowelString(demoString));

// Approach 2: Using array.prototype.filter

// function countVowelString(str) {
//   const vowels = /[aeiouAEIOU]/;

//   return str.split("").filter((char) => vowels.test(char)).length;
// }
// const demoString1 = "mira shani";
// console.log(countVowelString(demoString1));

// Approach 3: Using Array.prototype.reduce
// function countVowelString(str) {
//   const vowels = /[aeiouAEIOU]/;

//   return str
//     .split("")
//     .reduce((count, char) => (vowels.test(char) ? count + 1 : count), 0);
// }
// const demoString1 = "kusum kumari";
// console.log(countVowelString(demoString1));

// Approach 4: Using a Set for Lookup

function countVowelsString(str) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let count = 0;

  for (let char of str) {
    if (vowels.has(char)) {
      count++;
    }
  }

  return count;
}

const demoString1 = "kusum kumari";
console.log(countVowelsString(demoString1));
