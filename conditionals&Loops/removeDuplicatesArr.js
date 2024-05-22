// Implement a function to remove duplicates from an array. 
function removeDuplicate(arr){
    return Array.from(new Set(arr));
}
console.log(removeDuplicate([1,2,3,2,2,5,8]));