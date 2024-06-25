// Filter Objects Based on a Property
// Question: Write a function that filters out objects from an array where the active property is true.

// const users = [
//   { name: "Gautam", active: true },
//   { name: "Pradeep", active: false },
//   { name: "Anjali", active: true },
//   { name: "Keval", active: false },
//   { name: "Jhony", active: false },
// ];
// function filterActiveUsers(users) {
//   return users.filter((user) => user.active === false);
// }
// console.log(filterActiveUsers(users));

// traditional method using for loop

const people = [
  { name: "mrunal", active: false },
  { name: "Anjali", active: true },
  { name: "Divya", active: false },
  { name: "Kirti", active: true },
];

function filterActiveUsers(people) {
  let activeUser = [];
  for (let i = 0; i < people.length; i++) {
    if (people[i].active === false) {
      activeUser.push(people[i]);
    }
  }
  return activeUser;
}

console.log(filterActiveUsers(people));
