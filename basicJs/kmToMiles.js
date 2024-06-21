// write a js program to convert km to miles?
// 1km = 0.6213711922miles

function kmToMiles(kilometers) {
  const conversionFactor = 0.6213711922;

  const miles = kilometers * conversionFactor;
  return miles;
}
const kilometers = 10;
const miles = kmToMiles(kilometers);
console.log(`${kilometers} is equal to ${miles.toFixed(2)} miles`);
