// https://leetcode.com/problems/number-of-islands/

function numIslands(grid) {
  let counter = 0;
  for (var row = 0; row < grid.length; row++) {
    for (var col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        search(grid, row, col);
        counter += 1;
      }
    }
  }
  return counter;
}

function search(grid, row, col) {
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return;
  if (grid[row][col] === "0" || grid[row][col] === "*") return;

  grid[row][col] = "*";

  search(grid, row - 1, col);
  search(grid, row + 1, col);
  search(grid, row, col - 1);
  search(grid, row, col + 1);
}

// 2nd Approach
// let numIslands = function(grid) {
//     let visited = new Set();
//     let count = 0;
//
//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[0].length; j++) {
//           if (exploreIsland(grid, i, j, visited)) {
//             count++;
//           }
//         }
//     }
//
//     return count;
// };
// function exploreIsland(grid, row, col, visited) {
//     let pos = row + ',' + col;
//     if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return false;
//     if (grid[row][col] === "0" || visited.has(pos)) return false;
//
//     visited.add(pos);
//     exploreIsland(grid, row - 1, col, visited);
//     exploreIsland(grid, row + 1, col, visited);
//     exploreIsland(grid, row, col - 1, visited);
//     exploreIsland(grid, row, col + 1, visited);
//     return true;
// }
