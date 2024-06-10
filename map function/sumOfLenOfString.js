// Find the length of strings in an array:
// Given an array of strings, find the length of each string and return the total sum.

const originalString = ['apple','banana','mango'];
const lengthOfString = originalString.map(item => item.length);
const totalLength = lengthOfString.reduce((sum,length)=> sum + length,0);
console.log(lengthOfString);
console.log(totalLength);

// using traditional method
const originalString1 = ['gautam','pradeep','rintu'];
let totalLen = 0;

for(let i = 0; i<originalString1.length; i++){
    totalLen += originalString1[i].length;
}
console.log(totalLen);