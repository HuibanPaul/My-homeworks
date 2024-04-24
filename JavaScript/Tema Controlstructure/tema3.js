// Compute the sum of the elements of an array and display it in the console

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < myNums.length; i++) {
  sum += myNums[i];
}
console.log("suma array-ului:", myNums, "este", sum);
