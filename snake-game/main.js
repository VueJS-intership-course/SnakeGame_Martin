import './styles/style.css';
import { GameBoard } from './Classes/GameBoard';
import { direction } from './utils/utils';

const scoreList = document.getElementById('score-list');

let gameBoard = new GameBoard(20, 20);
let div = document.getElementById('table');
gameBoard.table.initTableNode();
div.append(gameBoard.table.tableNode);

let oldTimestamp = 0;

function updateGameLoop(timestamp) {
  if (!oldTimestamp) {
    oldTimestamp = timestamp;
  }
  let setDirection = direction;

  const time = timestamp - oldTimestamp;

  const frameRate = 1000 / gameBoard.snake.speed;

  if (time >= frameRate) {
    gameBoard.gameLoop(setDirection);

    if (gameBoard.gameOver) {
      alert('Game Over!');
      div.removeChild(gameBoard.table.tableNode);
      gameBoard = new GameBoard(20, 20);
      gameBoard.table.initTableNode();
      div.append(gameBoard.table.tableNode);
      setDirection = 'right';
      const readyStorage = JSON.parse(localStorage.getItem('storage'));
      for (const item of readyStorage) {
        const player = item.player;
        const score = item.score;
        const date = new Date(item.date).toString();

        const formattedText = `Player: ${player}, Score: ${score}, Date: ${date}`;
        const li = document.createElement('li');
        li.textContent = formattedText;

        scoreList.appendChild(li);
      }
    }

    oldTimestamp = timestamp;
  }

  requestAnimationFrame(updateGameLoop);
}

requestAnimationFrame(updateGameLoop);
