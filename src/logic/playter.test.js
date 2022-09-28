import { player } from './player';
import { gameboard } from './gameboard';
import { ship } from './ship';

describe('Players take turn to attack the enemy board', () => {
  let players = player;
  players.player1.gameboard = gameboard();
  players.player1.gameboard.newBoard();
  players.player1.gameboard.placeShip(ship(3),[1,4],'yAxis');

  players.player2.gameboard = gameboard();
  players.player2.gameboard.newBoard();

  players.player2.gameboard.placeShip(ship(2),[1,2],'yAxis');

  test('Player 1 attacks and hits' , () => {
    players.player1.attack([1,2]);
    expect(players.player2.gameboard.shipList[0].ship.hitList).toContainEqual([1,2]);
  })

  test('Player 2(PC) attacks' , () => {
    players.player2.AI()
    expect(players.player2.shotsFired.length).toBe(1);
  })

  test('Attacks already missed shot' , () => {
    players.player1.attack([1,2]);
    expect(players.player1.attack([1,2])).toBe(false);
  })

})