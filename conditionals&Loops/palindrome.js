//  Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards)
function palindrome(word){
    word = word.toLowerCase();

    const reverseWord = word.split('').reverse().join('');
    return word === reverseWord;
}
console.log(palindrome('mom'));