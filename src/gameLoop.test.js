import { gameLoop } from './gameLoop';

test('Player 1 to win', ()=> {
  const players = player;
  players.player1.gameboard = gameboard();
  players.player1.gameboard.newBoard();

  players.player1.gameboard.placeShip(ship(5), [1, 5], 'yAxis');
  players.player1.gameboard.placeShip(ship(4), [3, 6], 'yAxis');
  players.player1.gameboard.placeShip(ship(3), [5, 4], 'yAxis');
  players.player1.gameboard.placeShip(ship(2), [1, 8], 'xAxis');
  players.player1.gameboard.placeShip(ship(1), [7, 7], 'xAxis');

  players.player2.gameboard = gameboard();
  players.player2.gameboard.newBoard();
  players.player2.gameboard.placeShip(ship(5), random());
  players.player2.gameboard.placeShip(ship(4), random());
  players.player2.gameboard.placeShip(ship(3), random());
  players.player2.gameboard.placeShip(ship(2), random());
  players.player2.gameboard.placeShip(ship(1), random());
})