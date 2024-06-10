const numbers = [2, 4, 6, 8];
const doubleNum = numbers.map((item) => item * 2);
console.log(doubleNum);


// here what is happening in the background is
// making one varibale numbers and taking the numbers
// and again making another variable doubleNum for storing the value which are doubled
// here we are using map method inside map((item) = > item* 2);
// here in the (item) we are taking the numbers as item and iterating each array element and mulltiplying it with 2