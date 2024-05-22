// Write a function to check if a given string is a palindrome. 
function isPalindrome(str){
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}
console.log(isPalindrome("heor"));