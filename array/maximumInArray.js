// find the maximum number in an array

// using math.max() and spread operator

// const numbers = [10,50,20,4,80];
// const maxNumber = Math.max(...numbers);
// console.log(maxNumber);




// using reduce method

// const numbers = [10,50,20,4,99];
// const maxNumber = numbers.reduce((max,current) => (current > max ? current : max),numbers[0]);
// console.log(maxNumber);




// using sort method

// const numbers = [10, 50, 20, 4, 99];
// const maxNumber = numbers.slice().sort((a, b) => b - a)[0];
// console.log(maxNumber);




// using Math.max() method and apply() method

// const numbers = [10, 50, 20, 4, 99];
// const maxNumber = Math.max.apply(null,numbers);
// console.log(maxNumber);





// using forEach loop

// const numbers = [10, 50, 20, 4, 99];
// let maxNumber = numbers[0];
// numbers.forEach((numbers) => {
//    if(numbers > maxNumber){
//     maxNumber = numbers;
//    }
// });
// console.log(maxNumber);




// using for looop

// const numbers = [10, 50, 20, 4, 99];
// let maxNumber = numbers[0];
// for(let i = 1; i < numbers.length-1; i--){
//     if(numbers[i] > maxNumber){
//         maxNumber = numbers[i];
//     }
// }
// console.log(maxNumber);
// to resolved this questions
