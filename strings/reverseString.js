// write a function to reverse a string

// you can reverse a string in 8 methods
// Approach 1 (using split() reverse() join() method)

// const originalString = "Gautam";
// const reversedString = originalString.split('').reverse( ).join('');
// console.log(reversedString);


// by using function 
// function reversedString(str){
//     return str.split('').reverse().join('');
// }
// console.log(reversedString("pradeep"));

// ---------------------------------------
// Approach 2 for loop
// let originalString = "Rehman";
// let reversedString = "";

// for(let i = originalString.length-1; i >= 0; i--){
//     reversedString = reversedString + originalString[i];
// }
// console.log(reversedString);


// using for loop by making functions
// function reversedString(str){
//     let reverse = '';
//     for(let i = str.length-1; i >= 0; i--){
//         reverse += str[i];
//     }
//     return reverse;
// }
// console.log(reversedString('Anjali'));


// approach 3  Recursion
// function reversedString(str){
//     if(str === ''){
//         return " ";
//     }else{
//         return reversedString(str.substr(1)) + str[0];
//     }
// }
// console.log(reversedString("mrunal"));


// approach 4 array.from
// function reversedString(str){
//     return Array.from(str).reverse().join('');
// }
// console.log(reversedString("Divesh"));


// approach 6
// reduce method is used as a reduce it gives the single value
// function reversedString(str){
//     return str.split('').reduce((reversed,char) => char + reversed);
// }
// console.log(reversedString("rintu"));


// approach 7
// using spread operator

function reversedString(str){
    return  [...str].reverse().join('');
}
console.log(reversedString("Martand"));