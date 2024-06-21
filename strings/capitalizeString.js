// javascript program to capitalize the stirng
// ex: gautam = Gautam

// we are using 4 approach to deal with this

// Approach 1: String Methods

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log(capitalize("gautam"));

// Approach 2: using regular expression

function capitalize1(word) {
  return word.replace(/^\b/, (c) => c.toUpperCase());
}
console.log(capitalize1("keval"));
console.log(capitalize1("solanki"));

// Approach 3: Using ES6 Arrow Functions and Template Literals

const capitalize3 = (word3) =>
  `${word3.charAt(0).toUpperCase()}${word3.slice(1)}`;
console.log(capitalize3("shambhu"))
console.log(capitalize3("sahani"));




// Approach 4:  Using Array Destructuring (ES6)

function capitalize4 (word){
    const [first, ...rest] = word;
    return [first.toUpperCase(), ...rest].join('');
}
console.log(capitalize4("mira"));
console.log(capitalize4("sahani"));