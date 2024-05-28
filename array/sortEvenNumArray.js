// write a js program that takes a number and return  new array only with the even nuber
// const array = [2,3,4,8,7,25,27];
// let newArr = array.filter( item => {
//     return item % 2 === 0;
// });
// console.log(newArr);

// ----------------------------2. using reduce method()-------------------------
// const array = [2, 3, 4, 8, 7, 25, 27];
// function evenNumReduceM(arr) {
//   return arr.reduce((acc, num) => {
//     if (num % 2 === 0) {
//       acc.push(num);
//     }
//     return acc;
//   }, []);
// }

// console.log(evenNumReduceM(array));

// ----------------------------3. using forEach method()-------------------------
// const array = [2, 3, 4, 8, 7, 25, 27];
// function getEvenNumbersForEach(arr) {
//   const evenNumbers = [];
//   arr.forEach((num) => {
//     if (num % 2 === 0) {
//       evenNumbers.push(num);
//     }
//   });
//   return evenNumbers;
// }
// console.log(getEvenNumbersForEach(array));
// ----------------------------4. using map method combined with filter for simplicity-------------------------
// const array = [2, 3, 4, 8, 7, 25, 27];
// function sortEvenNumber(arr){
//     return arr.map(num => (num % 2 === 0 ? num : null)).filter(num => num !== null);
// }
// console.log(sortEvenNumber(array));

// ----------------------------5. using for loop-------------------------
// const array = [2, 3, 4, 8, 7, 25, 27];
// function sortEvenNumber(arr) {
    //   const evenNumbers = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         evenNumbers.push(arr[i]);
//     }
//   }
//   return evenNumbers;
// }

// console.log(sortEvenNumber(array));




// ----------------------------6. using while loop-------------------------
const array = [2, 3, 4, 8, 7, 25, 27];

function sortEvenNumber(arr){
    const evenNumbers = [];
    let i = 0;
    while (i < arr.length) {
        if(arr[i] % 2 === 0){
            evenNumbers.push(arr[i]);
        }
        i++;
    }
    return evenNumbers;
}

console.log(sortEvenNumber(array));