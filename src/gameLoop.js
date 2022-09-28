import { gameboard } from './logic/gameboard';
import { ship } from './logic/ship';
import { player } from './logic/player';
import {
  drawBoard, selectShips, winScreen, restartGame, restartRotate,
} from './dom';

const random = () => [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
const randomAxis = () => {
  if (Math.floor(Math.random() * 2) === 0) return 'xAxis';
  return 'yAxis';
};

const gameLoop = {
  players: player,
  buildBoards() {
    this.players.player1.gameboard = gameboard();
    this.players.player1.gameboard.newBoard();
    this.players.player2.gameboard = gameboard();
    this.players.player2.gameboard.newBoard();
  },
  populateBoards(lenght, coords, axis) {
    const newShip = ship(lenght);
    this.players.player1.gameboard.placeShip(newShip, coords, axis);
  },
  populateBoardsAI() {
    let pos = random();
    let axis = randomAxis();
    for (let i = 5; i >= 1; i -= 1) {
      let size = i;
      if (size <= 2) size += 1;
      let place = this.players.player2.gameboard.validateShip(size, pos, axis);
      while (place === false) {
        pos = random();
        place = this.players.player2.gameboard.validateShip(size, pos, axis);
      }
      this.players.player2.gameboard.placeShip(ship(i), pos, axis);
      axis = randomAxis();
    }
  },
  gameAttack(position) {
    this.players.player1.attack(position);
    drawBoard(this);
    if (this.checkWin() === 1) {
      this.announceWinner(1);
      return;
    }
    this.players.player2.AI();
    drawBoard(this);
    if (this.checkWin() === 2) {
      this.announceWinner(2);
    }
  },
  checkWin() {
    if (this.players.player2.gameboard.allSunk) return 1;
    if (this.players.player1.gameboard.allSunk) return 2;
    return false;
  },
  announceWinner(win) {
    switch (win) {
      case 1:
        winScreen(win);
        restartRotate();
        this.newGame();
        restartGame();
        break;

      default:
        winScreen(win);
        restartRotate();
        this.newGame();
        restartGame();
        break;
    }
  },
  newGame() {
    this.players = player;
    this.players.player1.shotsFired = [];
    this.players.player2.shotsFired = [];
    this.buildBoards();
    this.populateBoardsAI();
    drawBoard(this);
    document.querySelector('.block').style.display = 'block';
    selectShips(this, 5, 1);
  },
};

export { gameLoop };
