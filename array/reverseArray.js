// reverse an array
// we are following several approach

// using reverse method
// const fruits = ["banana","apple","guava","grape","kiwi"];
// const reverse = fruits.reverse();
// console.log(reverse);

// using spread operator
// const vehicles = ["lamborghini","bugattii","supra","thar","rubicon"];
// const reversedVehicles = [...vehicles].reverse();
// console.log(reversedVehicles);

// map method
// example of map method

// const numbers = [4,9,16,25];
// const newArr = numbers.map(Math.sqrt);
// console.log(newArr);

// const numbers = [10,20,55,60];
// const multiplication = numbers.map(multiply);
// function multiply(num){
//     return num * 10;
// }
// console.log(multiplication);

// const bike = ["ns 200","dominor 400", "bmw gs 1250","ducattii"];
// const reversedBike = bike.map((_, index, arr) => arr[arr.length - 1 - index]);
// console.log(reversedBike);
// here (_, index,arr) => arr[arr.length - 1 - index] remember index is always 0

// using for..of loop
// example of for..of loop
// const cars = ["bmw","volvo","mclaren"];
// let text = '';
// for (let x of cars){
//     text += x + " ";
// }
// console.log(text);
// let language = 'javascript';
// let text = '';
// for(let x of language){
//     text = text + x + " ";
// }
// console.log(text);

// const originalArray = [5, 8, 6, 0, 4];
// const reversedArray = [];
// for (const item of originalArray) {
//   reversedArray.unshift(item);
// }

// console.log(reversedArray);

// basic understanding of unshift method
// it adds the new elements to the begining of the array

// while loop
// const originalArray = [1, 5, 8, 9, 10];
// var reversedArray = [];
// let i = originalArray.length - 1;
// while (i >= 0) {
//   reversedArray.push(originalArray[i]);
//   i--;
// }
// console.log(reversedArray);

// what is push method of array

// reduce method

// const originalArray = [1,8,5,20,45,15];
// const reversedArray = originalArray.reduce((acc,current) =>{
//     acc.unshift(current);
//     return acc;
// }, []);
// console.log(reversedArray);

// for loop
// const originalArray = [1, 8, 5, 20, 45, 15];
// const reversedArray = [];
// for(let i = originalArray.length-1; i >= 0; i--){
//     reversedArray.push(originalArray[i]);
// }
// console.log(reversedArray);

