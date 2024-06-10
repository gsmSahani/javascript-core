// Extract lengths of strings in an array:
// Given an array of strings, extract the length of each string and return the new array.

const originalString = ["gautam", "mira", "shambhu"];
const extractedStringArr = originalString.map((item) => item.length);
console.log(extractedStringArr);

// sove the above question using traditional method

const originalString1 = ["pradeep", "rintu", "shankar"];
const extracetedArr1 = [];
for (let i = 0; i < originalString1.length; i++) {
  const extraction = originalString1[i].length;
  extracetedArr1.push(extraction);
}
console.log(extracetedArr1);
