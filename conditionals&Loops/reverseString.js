// write a js program to reverse a string
// var str = "gautam";
// var reverse = str.split('').reverse().join('');
// console.log(reverse);

// using function
// const revString = (str) => str.split('').reverse().join('');
// console.log(revString('shambhu'));

// using for loop
function reverseString(str){
    var newString = '';
    for(var i = str.length - 1; i >= 0; i--){
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('mira'));