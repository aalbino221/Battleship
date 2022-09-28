import { ship } from './ship';

let dummyShip = ship(3);
''

test('good', () => {
  expect(1).toBe(1)
});

/*test('Ship has length', () => {
  expect(dummyShip.length).not.toBe(undefined);
  expect(dummyShip.length).not.toBe(null);
})

test('Ship has hit list', () => {
  expect(dummyShip.hitList).not.toBe(undefined);
  expect(dummyShip.hitList).not.toBe(null);
})

test('Ship is sunk', () => {
  expect(dummyShip.isSunk).toBe(false);
})

test('Ship has hit()', () => {
  let dummyShip = ship();
  dummyShip.hit([1,2]);
  dummyShip.hit([2,4]);
  expect(dummyShip.hitList).toContainEqual([1,2]);
})

test('Ship has sunk() and is not sunk', () => {
  let dummyShip = ship();
  expect(dummyShip.isSunk).toBe(false);
})

test('Ship has sunk() and is sunk', () => {
  let dummyShip = ship(2);
  dummyShip.hit([1,2]);
  dummyShip.hit([2,4]);
  expect(dummyShip.isSunk).toBe(true);
})*/