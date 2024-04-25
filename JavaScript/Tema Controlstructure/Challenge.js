// Using nested for generate the following pattern
//    0 1 0 1
//    1 0 1 0
//    0 1 0 1
//    1 0 1 0

let x = 0;
for (let i = 1; i <= 4; i++) {
  const pattern = [];
  x = 1 - x;
  for (let j = 1; j <= 4; j++) {
    x = 1 - x;
    pattern.push(x);
  }
  console.log(pattern.join(" "));
}
