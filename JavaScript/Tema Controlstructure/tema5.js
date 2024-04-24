// Compute how many times a certain element appears in an array

const names = [
  "Ioana",
  "Maria",
  "Andreea",
  "Ioana",
  "Ramona",
  "Georgiana",
  "Roxana",
  "Ioana",
  "Andreea",
  "Maria",
  "Ioana",
  "Roxana",
];
const count = {};

for (const name of names) {
  if (name in count) {
    count[name] += 1;
  } else {
    count[name] = 1;
  }
}

console.log(count);
