// write a js program to check whether it is leap year or not
// condition of leap year
var year = 2024;
var isLeapYear;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      isLeapYear = true;
    } else {
      isLeapYear = false;
    }
  } else {
    isLeapYear = true;
  }
}

if (isLeapYear) {
  console.log(year + " is leap year");
} else {
  console.log(year + " is not leap year");
}
// mehtod 2
// using function

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}
var year = 2025;
if (isLeapYear(year)) {
  console.log(year + " is leap year");
} else {
  console.log(year + " is not leap year");
}
