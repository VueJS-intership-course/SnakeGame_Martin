import './style.css';
import { GameBoard } from './Classes/GameBoard';

let gameBoard = new GameBoard(20, 20);
let div = document.getElementById('table');
gameBoard.table.initTableNode();
div.append(gameBoard.table.tableNode);
// gameBoard.gameLoop();

//! TODO -> requestAnimation 
window.setInterval(function () {
  gameBoard.gameLoop();
}, 250);

let direction = 'right';
document.addEventListener('keydown', function (event) {
  if (event.key == 'ArrowLeft') {
    direction = 'left';
  } else if (event.key == 'ArrowUp') {
    direction = 'up';
  } else if (event.key == 'ArrowRight') {
    direction = 'right';
  } else if (event.key == 'ArrowDown') {
    direction = 'down';
  }
  //asdw
});

export {direction}