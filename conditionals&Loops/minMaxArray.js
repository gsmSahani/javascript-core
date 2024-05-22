//  Given an array of numbers, write a function to find the largest and smallest numbers in the array. 
function minMaxArray(array){
    let flattenedArray = array.flat();
    let min = Math.min(...flattenedArray);
    let max = Math.max(...flattenedArray);

    return [min,max];
}
console.log(minMaxArray([[1,5,8,1,0,2,80,75],[1,5,3,5,7,90,25,48,33]]));