function searchBoard(grid, dictionary) {
  let allValidWords = [];
  for (var row = 0; row < grid.length; row++) {
    for (var col = 0; col < grid[0].length; col++) {
      allValidWords.push(
        ...validWords(
          grid,
          dictionary,
          row,
          col,
          grid[row][col],
          (exploredPos = new Set())
        )
      );
    }
  }
  return allValidWords.filter(word => word !== null);
}

function validWords(grid, dictionary, row, col, currentStr, exploredPos) {
  let key = `${row}-${col}`;
  // filter dictionary to grab only words I CAN build from my currentStr;
  let possibleMatches = [];
  dictionary.forEach(word => {
    if (word.slice(0, currentStr.length) === currentStr) {
      possibleMatches.push(word);
    }
  });
  if (possibleMatches.length === 0 || exploredPos.has(key)) return [null];
  if (dictionary.includes(currentStr) && possibleMatches.length === 1)
    return [currentStr];

  let words = [];
  exploredPos.add(key);
  // fxn that given position returns all neighbors -> [[0,1],[0,2]]
  getNeighbors(row, col).forEach(neighbor => {
    let row2 = neighbor[0];
    let col2 = neighbor[1];
    if (!exploredPos.has(neighbor)) {
      words.push(
        ...validWords(
          grid,
          dictionary,
          row2,
          col2,
          currentStr + grid[row2][col2],
          (exploredPos = new Set([key]))
        )
      );
    }
  });

  if (possibleMatches.includes(currentStr)) {
    words.push(currentStr);
  }

  return Array.from(new Set(words)); // to avoid duplicates
}

function getNeighbors(row, col) {
  let possibleMatches = [
    [row, col - 1],
    [row, col + 1],
    [row - 1, col],
    [row + 1, col],
    [row - 1, col - 1],
    [row - 1, col + 1],
    [row + 1, col - 1],
    [row + 1, col + 1]
  ];
  possibleMatches = possibleMatches.filter(
    coord => coord[0] >= 0 && coord[0] < 4 && coord[1] >= 0 && coord[1] < 4
  );
  return possibleMatches;
}

let board = [
  ["E", "E", "C", "A"],
  ["A", "L", "E", "P"],
  ["H", "N", "B", "O"],
  ["Q", "T", "T", "Y"]
];

let dict = ["CENT", "QWERTY", "BLEEP", "FISH", "CENTY", "PEN"];

console.log(searchBoard(board, dict));
