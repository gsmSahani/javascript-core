// Given a string, write a function to count the occurrences of each character in the string.
function countOccuranceArr(str){
    const charCount = {};
    for(let char of str){
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}
console.log(countOccuranceArr("gautam"));