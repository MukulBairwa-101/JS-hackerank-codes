let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  // Write your code here
  let n = arr.length;
  let primaryDiagonalSum = 0,
    secondaryDiagonalSum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == j) {
        primaryDiagonalSum += arr[i][j];
      }
      if (i == n - j - 1) {
        secondaryDiagonalSum += arr[i][j];
      }
    }
  }
  return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

console.log(diagonalDifference(arr));
