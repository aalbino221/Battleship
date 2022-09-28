import { gameboard } from './gameboard';
import { ship } from './ship';

test('Create empty gameboard', () => {
  let game = gameboard();
  game.newBoard();
  expect(game.board[0][0]).toEqual({value: null, ship: null})
  expect(game.board[9][5]).toEqual({value: null, ship: null})
})


describe("Place length 2 ship on [1,2] - yAxis", () => {
  let game = gameboard();
  game.newBoard();
  let dummyShip = ship(2);
  game.placeShip(dummyShip,[1,2],'yAxis');

  test('Ship on [1,2]', () => {
    expect(game.board[1][2]).toEqual({value: null, ship: true})
  })

  test('Ship on [1,3]', () => {
    expect(game.board[1][1]).toEqual({value: null, ship: true})
  })
})


describe("Place length 2 ship on [1,2] - xAxis", () => {
  let game = gameboard();
  game.newBoard();
  let dummyShip = ship(2);
  game.placeShip(dummyShip,[1,2],'xAxis');

  test('Ship on [1,2]', () => {
    expect(game.board[1][2]).toEqual({value: null, ship: true})
  })

  test('Ship on [0,2]', () => {
    expect(game.board[2][2]).toEqual({value: null, ship: true})
  })
})

test('Refuse ship out of bounds', () => {
  let game = gameboard();
  game.newBoard();
  let dummyShip = ship(5);
  expect( () => game.placeShip(dummyShip,[1,2],'yAxis')).toThrow(TypeError)
})

test ('Ship is on shiplist', () => {
  let game = gameboard();
  game.newBoard();
  let dummyShip = ship(2);
  game.placeShip(dummyShip,[1,2],'yAxis');
  expect(game.shipList[0]).not.toBe(undefined);
})

describe ('Receive Attack function', () => {
  let game = gameboard();
  game.newBoard();
  let dummyShip = ship(2);
  game.placeShip(dummyShip,[1,2],'yAxis');

  test('Attack hits ship', () => {
    game.receiveAttack([1,2]);
    expect(game.shipList[0].ship.hitList).toContainEqual([1,2]);
  })

  test('Attack misses ship', () => {
    game.receiveAttack([4,4]);
    expect(game.missedShots).toContainEqual([4,4]);
  })
})

describe ('All ships have been sunk?', () => {
  let game = gameboard();
  game.newBoard();
  let dummyShip = ship(2);
  game.placeShip(dummyShip,[1,2],'yAxis');

  test('Ship is sunk', () => {
    game.receiveAttack([1,2]);
    game.receiveAttack([1,1]);
    expect(game.allSunk).toBe(true);
  })
})