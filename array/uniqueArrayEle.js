// write a functions that only give unique array from the original array 

// ----------------method 1 using filter and indexOf _------------------------------
// const array = [1,8,2,1,2,9,8,2,3,1,5,6,8,9]
// function getUniqueArrayEle(arr){
//     return arr.filter((item,index) => arr.indexOf(item) === index);
// }
// console.log(getUniqueArrayEle(array));

// --------------------method 2 using set-------------------------------
// const array = [1,8,2,1,2,9,8,2,3,1,5,6,8,9];
// function getUniqueArrayEle(arr){
//     return [...new Set(arr)];
// }
// console.log(getUniqueArrayEle(array));
