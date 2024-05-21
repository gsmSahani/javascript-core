// Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.

function stringValidation(str) {
  if (str.length < 4) {
    return false;
  }
  front = str.substring(0, 4);
  if (front == "java") {
    return true;
  } else {
    return false;
  }
}

console.log('javascript');
