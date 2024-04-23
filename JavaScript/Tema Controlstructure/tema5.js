const nums = [1, 3, 6, 1, 7, 3, 2, 1, 6, 1, 7, 1];

const count = {};

for (let ele of nums) {
  if (count[ele]) {
    count[ele] += 1;
  } else {
    count[ele] = 1;
  }
}

console.log(count);
