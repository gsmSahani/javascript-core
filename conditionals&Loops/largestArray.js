// 8. Write a JavaScript program to find the largest element in a nested array. 
function findLargestArray(nestedArray){
    let largest = nestedArray[0][0];
    for(let arr of nestedArray){
        for(let num of arr){
            if(num > largest){
                largest = num;
            }
        }
    }
    return largest;
}
console.log(findLargestArray([[24,56,98],[99,49,2]]));