// intersection of two arrays
// use 5 js approach
// 1: set filter and includes
// 2: set intersection
// 3: filter and includes
// 4: filter and set
// 5: reduce and set

// const findIntersection1 = (arr1,arr2) => [...new Set(arr1.filter(element => arr2.includes(element)))];
// const array1 = [1, 8, 5, 2, 5];
// const array2 = [1, 5, 9, 8, 7];
// const intersected = findIntersection1(array1, array2);
// console.log(intersected);

// 2: using set inersections method
// const findIntersection2 = (arr1,arr2) => [...new Set(arr1.filter(element => new Set(arr2).has(element)))];
// const array1 = [1, 8, 5, 2, 5];
// const array2 = [1, 5, 9, 8, 7];
// const  intersected = findIntersection2(array1,array2);
// console.log(intersected);

// 3: using filter and includes method
// const findintersection3 = (arr1,arr2) => arr1.filter(element => arr2.includes(element));
// const array1 = [1, 8, 5, 2, 5];
// const array2 = [1, 5, 9, 8, 7];
// const intersected = findintersection3(array1,array2);
// console.log(intersected);
// here this filter has one problem it will intersect but show the repeated value in the output
// like here in op : [1,8,5,5]
// instead of showing the above output it should show the [1,8,5]
// and it is showing because of filter method using with includes to intersect properly use set method with includes

// 4: using filter and set method
// const findIntersection4 = (arr1, arr2) =>
//   arr1.filter((element) => new Set(arr2).has(element));
// const array1 = [1, 8, 5, 2, 5];
// const array2 = [1, 5, 9, 8, 7];
// const intersected = findIntersection4(array1, array2);
// console.log(intersected);
// same problem is here also it will show the duplicate value in the output if you use filter value

// another query to remove the duplicate value to be printed by using the same method filter and set method you can achieve by anotehr method
// let see
// const findIntersection04 = (arr1, arr2) => {
//   const set2 = new Set(arr2);
//   const filtered = arr1.filter((element) => set2.has(element));
//   return [...new Set(filtered)];
// };
// const array1 = [1, 8, 5, 2, 5];
// const array2 = [1, 5, 9, 8, 7];
// const intersected = findIntersection04(array1, array2);
// console.log(intersected);
