// cуворий режим
"use strict";

// =================================================================

// Виведіть всі можливі наступні комбінації ходів користувачів у грі“Хрестики-нулики”, починаючи з деякої заданої ситуації
// (тобто маємо двовимірний масив з елементами : 0 - нулик, Х - хрестик, пробіл - ще не зайнято, і вам треба самостійно вивести всі можливі шляхи заповнення ще незаповнених клітинок (де пробіли). Поки можна не підраховувати чи вже є 3
// хрестики чи 3 нулики у рядок.

if (confirm("Почати всі тестування?")) {
  const initialBoard = [
//    0    1    2
    ["X", " ", "O"], //  0 (i)
    [" ", "O", " "], //  1 (i)
    [" ", " ", "X"], //  2 (i)
  ];
  // Порожні клітинки для данного прикладу:
  // → [[0,1], [1,0], [1,2], [2,0], [2,1]]

  // [0,1] = X
  //   [1,0] = X
  //     [1,2] = X
  //       [2,0] = X
  //         [2,1] = X → Результат №1
  //         ← pop [2,1]
  //       ← pop [2,0]
  //     ← pop [1,2]
  //   ← pop [1,0]
  // ← pop [0,1] і тд

  function getEmptyCells(board) {
    const empty = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === " ") {
          empty.push([i, j]);
        }
      }
    }
    return empty;
  }

  function printBoard(board) {
    document.writeln('<table class="task__table">');
    for (let i = 0; i < 3; i++) {
      document.writeln("<tr>");
      for (let j = 0; j < 3; j++) {
        const symbol = board[i][j];
        const color =
          symbol === "X" ? "blue" : symbol === "O" ? "green" : "black";
        document.writeln(`<td style="color: ${color}">${symbol}</td>`);
      }
      document.writeln("</tr>");
    }
    document.writeln("</table>");
  }

  function backtrack(board, cells) {
    if (cells.length === 0) {
      printBoard(board);
      return;
    }

    const [row, col] = cells[0]; 
    const nextCells = cells.slice(1); 

    for (const symbol of ["X", "O"]) {
      board[row][col] = symbol;
      backtrack(board, nextCells);
      board[row][col] = " "; // Відкат
    }
  }

  const emptyCells = getEmptyCells(initialBoard);
  backtrack(initialBoard, emptyCells);
}
