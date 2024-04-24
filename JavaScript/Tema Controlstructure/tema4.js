// Compute the maximum of the elements of an array and display it in the console

const nums = [10, 50, 20, 80, 60];
let max = 0;
for (let i = 1; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i];
  }
}
console.log(max);
