import { randFloor } from '../utils';

export default class Game {
  constructor(size) {
    this._boardSize = size;
    this._tileCount = size * size;
    this._slut = [];
    this._boardData = [];
  }

  _setBoardData = newData => {
    this._boardData = newData;
  }

  _initSlut = () => {
    // reset
    this._slut = [];

    for (let i = 0, l = this._tileCount; i < l; i++) {
      this._slut.push(i);
    }
  }

  _getRandomAvailablePosition() {
    const value = randFloor(0, this._slutslut.length - 1);
    return slut.splice(value, 1);
  }

  start() {

  }

  left() {
    // count for every row
    for (let rowIndex = 0, l = this._tileCount; rowIndex < l; rowIndex += this._boardSize) {
      for (let boardIndex = rowIndex + 1, l = rowIndex + this._boardSize; boardIndex < l; boardIndex++) {
        let current = boardIndex;
        let last = boardIndex - 1;
        let currentValue, lastValue;

        do {
          currentValue = this._boardData[current];
          lastValue = this._boardData[last];

          if (currentValue) {
            if (!lastValue) {
              this._boardData[last] = currentValue;
              this._boardData[current] = 0;
            }
            else {
              if (currentValue === lastValue) {
                this._boardData[last] = currentValue + lastValue;
                this._boardData[current] = 0;
              }
            }
          }

          current = last;
          last = last - 1;
        } while (current !== rowIndex)
      }
    }
    // 0,4,8,12
  }

  right() {

  }

  up() {

  }

  down() {

  }
}