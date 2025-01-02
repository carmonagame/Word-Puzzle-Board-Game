// Function to create a random letter grid
function createBoard(size) {
  const board = [];
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      row.push(letters[Math.floor(Math.random() * letters.length)]);
    }
    board.push(row);
  }

  return board;
}

// Function to display the board in the console
function displayBoard(board) {
  console.clear();
  board.forEach((row) => console.log(row.join(" ")));
}

// Function to place a word in the grid
function placeWord(board, word) {
  const size = board.length;
  const wordLength = word.length;

  // Randomly choose direction: horizontal (0) or vertical (1)
  const direction = Math.random() < 0.5 ? "horizontal" : "vertical";

  let placed = false;

  while (!placed) {
    if (direction === "horizontal") {
      const row = Math.floor(Math.random() * size);
      const col = Math.floor(Math.random() * (size - wordLength));

      // Check if space is available
      let canPlace = true;
      for (let i = 0; i < wordLength; i++) {
        if (board[row][col + i] !== " ") {
          canPlace = false;
          break;
        }
      }

      if (canPlace) {
        for (let i = 0; i < wordLength; i++) {
          board[row][col + i] = word[i];
        }
        placed = true;
      }
    } else if (direction === "vertical") {
      const row = Math.floor(Math.random() * (size - wordLength));
      const col = Math.floor(Math.random() * size);

      // Check if space is available
      let canPlace = true;
      for (let i = 0; i < wordLength; i++) {
        if (board[row + i][col] !== " ") {
          canPlace = false;
          break;
        }
      }

      if (canPlace) {
        for (let i = 0; i < wordLength; i++) {
          board[row + i][col] = word[i];
        }
        placed = true;
      }
    }
  }
}

// Function to check if a guess is correct
function checkGuess(board, word) {
  const size = board.length;

  // Check rows and columns
  for (let row of board) {
    if (row.join("").includes(word)) return true;
  }

  for (let colIndex = 0; colIndex < size; colIndex++) {
    let columnWord = "";
    for (let rowIndex = 0; rowIndex < size; rowIndex++) {
      columnWord += board[rowIndex][colIndex];
    }
    if (columnWord.includes(word)) return true;
  }

  return false;
}

// Main game logic
function playGame() {
  const size = 10; // Size of the board
  const wordsToHide = ["JAVASCRIPT", "CODE", "PUZZLE", "GAME"];
  
  // Create the board and fill it with random letters
  let board = createBoard(size);

  // Replace empty spaces with random letters and hide words
  for (let word of wordsToHide) placeWord(board, word);

}
