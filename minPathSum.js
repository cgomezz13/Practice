// https://leetcode.com/problems/minimum-path-sum/description/

function minPathSum(grid) {
  for (var row = 0; row < grid.length; row++) {
    for (var col = 0; col < grid[0].length; col++) {
      if (row === 0 && col === 0) {
        continue;
      } else if (row === 0) {
        grid[row][col] += grid[row][col - 1];
      } else if (col === 0) {
        grid[row][col] += grid[row - 1][col];
      } else {
        grid[row][col] += Math.min(grid[row - 1][col], grid[row][col - 1]);
      }
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
}
let grid = [[1, 2, 5], [3, 4, 1]];
console.log(minPathSum(grid));

// recursive approach + memoization
// function minPathSum(grid, row = 0, col = 0, memo = {}) {
//   let key = `${row}-${col}`;
//
//   if (row >= grid.length || col >= grid[0].length) return Infinity; //;
//   if (row === grid.length - 1 && col === grid[0].length - 1)
//     return grid[row][col];
//   if (key in memo) {
//     return memo[key];
//   }
//
//   let result =
//     grid[row][col] +
//     Math.min(
//       minPathSum(grid, row + 1, col, memo),
//       minPathSum(grid, row, col + 1, memo)
//     );
//
//   memo[key] = result;
//   return memo[key];
// }
