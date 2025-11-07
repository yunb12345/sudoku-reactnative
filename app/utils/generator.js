export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function isSafe(board, row, col, num) {
  for (let x = 0; x < 9; x++) if (board[row][x] === num || board[x][col] === num) return false;
  const startRow = row - (row % 3);
  const startCol = col - (col % 3);
  for (let r = 0; r < 3; r++)
    for (let c = 0; c < 3; c++)
      if (board[startRow + r][startCol + c] === num) return false;
  return true;
}

function findEmpty(board) {
  for (let r = 0; r < 9; r++)
    for (let c = 0; c < 9; c++)
      if (board[r][c] === 0) return [r, c];
  return null;
}

function solve(board) {
  const empty = findEmpty(board);
  if (!empty) return true;
  const [row, col] = empty;
  const nums = shuffle([1,2,3,4,5,6,7,8,9]);
  for (let num of nums) {
    if (isSafe(board, row, col, num)) {
      board[row][col] = num;
      if (solve(board)) return true;
      board[row][col] = 0;
    }
  }
  return false;
}

export function generatePuzzle() {
  const board = Array.from({ length: 9 }, () => Array(9).fill(0));
  solve(board);
  const puzzle = board.map(row => [...row]);
  let removals = 45;
  while (removals > 0) {
    const r = Math.floor(Math.random() * 9);
    const c = Math.floor(Math.random() * 9);
    if (puzzle[r][c] !== 0) {
      puzzle[r][c] = 0;
      removals--;
    }
  }
  return puzzle;
}
