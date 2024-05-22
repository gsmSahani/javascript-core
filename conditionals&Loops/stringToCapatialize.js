// 10. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).
// using split() and map() method
function toUppercase(str){
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(toUppercase("gautam sahani"));


// by using regular expression with replace() method

function toUppercase(str){
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(toUppercase('mira sahani'));

// note here: (/\b\w\g) means 
// `\b`: is a word boundary assertion, which matches the position between a word character and a non-word character.
// `\w`: matches any word character (alphanumeric character or underscore).
// `\g`: is a global flag that ensures the regular expression matches all occurrences in the string, not just the first one.
