// implement a custom sorting in array
function customSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for(let j =0; j < len - 1 - i; j++ ){
        if(arr[j] > arr[j + 1]){
            // here swapping is done
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
  }
  return arr;
}

const myArray = [5,2,9,3,6];
const sortedArray = customSort(myArray);
console.log(sortedArray);