// remove duplicate array
// Method used: set,map,filter,reduce,forEach, indexOf,for.of loop

// a javascript set method is a collection of unique value
// const originalArray = [1,8,2,1,7,2,5,8,9,3,5,55];
// const removeDuplicate = [...new Set(originalArray)];
// console.log(removeDuplicate);

// using map method
// const originalArray = [1,8,2,5,4,1,2,8,55,7,0,2,9,4];
// const map = new Map();
// const removeDuplicate  = [];
// for(const item of originalArray){
//     if(!map.has(item)){
//         map.set(item,true);
//         removeDuplicate.push(item);
//     }
// }

// console.log(removeDuplicate);
// console.log(removeDuplicate.length())
// console.log(originalArray.length);

// using reduce method
// const originalArray = [1,8,2,5,4,1,2,8,55,7,0,2,9,4];
// const removeDuplicate = originalArray.reduce((acc,curr) => {
//     if(!acc.includes(curr)){
//         acc.push(curr)
//     }
//     return acc;
// }, []);
// console.log(removeDuplicate);

//using filter method
// const originalArray = [1,8,2,5,4,1,2,8,55,7,0,2,9,4];
// const removeDuplicate = originalArray.filter((value,index,self) => self.indexOf(value) === index);
// console.log(removeDuplicate);

// using forEach
// const originalArray = [1,8,2,5,4,1,2,8,55,7,0,2,9,4];
// const removeDuplicate = [];
// originalArray.forEach((item) => {
//     if(!removeDuplicate.includes(item)){
//         removeDuplicate.push(item);
//     }
// });
// console.log(removeDuplicate);

// using for of loop
// const originalArray = [1,8,2,5,4,1,2,8,55,7,0,2,9,4];
// const removeDuplicate = [];
// for (const  item of originalArray){
//     if(!removeDuplicate.includes(item)){
//         removeDuplicate.push(item);
//     }
// }
// console.log(removeDuplicate);

// using indexOf loop
// const originalArray = [1, 8, 2, 5, 4, 1, 2, 8, 55, 7, 0, 2, 9, 4];
// const removeDuplicate = [];
// for(let i =0; i<originalArray.length; i++){
//     if(removeDuplicate.indexOf(originalArray[i]) === -1){
//         removeDuplicate.push(originalArray[i]);
//     }
// }
// console.log(removeDuplicate);