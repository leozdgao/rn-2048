import Game from '../src/mods/game';

const game = new Game(4);

test('Swipe left', () => {
  game._setBoardData([ 0, 2, 0, 0, 0, 0, 2, 0 ]);
  game.left();

  expect(game._boardData).toEqual([ 2, 0, 0, 0, 2, 0, 0, 0 ]);
});

test('Swipe left and merge', () => {
  game._setBoardData([ 0, 2, 2, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0, 2, 2, 2 ]);
  game.left();

  expect(game._boardData).toEqual([ 4, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 4, 2, 0, 0 ]);
});
