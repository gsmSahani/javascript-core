// write a js program to check if the given string is palindrome or not
// Approach 1: using a loop

// function isPalindrome(str) {
//   str = str.toLowerCase().replace(/[\W_]/g, "");
//   let len = str.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPalindrome("maam"));

// Approach 2: Builtin Functions

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");
  return str === str.split("").reverse().join();
}
console.log(isPalindrome("gautam"));
