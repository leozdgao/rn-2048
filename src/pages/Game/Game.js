import React, { Component } from 'react';
import { View, Text, TouchableHighlight, PanResponder } from 'react-native';
import styles from './styles';
import GameHead from '../../mods/GameHead/GameHead';
import GameButton from '../../mods/GameButton/GameButton';
import GameBoard from '../../mods/GameBoard/GameBoard';
import GameOver from '../../mods/GameOver/GameOver';
import { randFloor } from '../../mods/utils';
import { getDirectionFromGesture } from '../../mods/utils/gesture';

const getRandomAvailablePosition = (slut) => {
  const value = randFloor(0, slut.length - 1);
  return slut.splice(value, 1);
}

class Game extends Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      score: 0,
      bestScore: 0,
      boardData: [],
      isGameOver: false
    };
  }

  initSlut = () => {
    this.slut = [];
    for (let i = 0, l = 16; i < l; i++) {
      this.slut.push(i);
    }
  }

  generateNextTile() {
    const i = getRandomAvailablePosition(this.slut)[0];
    const boardData = [ ...this.state.boardData ];
    boardData[i] = 2;

    this.setState({
      boardData
    });
  }

  startGame() {
    this.setState({
      boardData: [],
      isGameOver: false
    }, () => {
      this.initSlut();
      const initCellPosition = [
        getRandomAvailablePosition(this.slut)[0],
        getRandomAvailablePosition(this.slut)[0]
      ];
      const boardData = new Array(16);
      initCellPosition.forEach(i => {
        boardData[i] = 2;
      });
      this.setState({
        boardData
      });
      // generateNextTile
      this.clr = setInterval(() => {
        if (this.slut.length > 0) {
          this.generateNextTile();
        } else {
          this.setState({
            isGameOver: true
          });
          clearInterval(this.clr);
        }
      }, 1000);
    });
  }

  handleButtonPress = () => {
    this.startGame();
  }

  handleBoardLayout = e => {
    const { width } = e.nativeEvent.layout;
    this._gameboard.measure((dx, dy) => {
      this._gameoverStyle = {
        top: dy,
        width
      };
    });
  }

  // ==== responder ====

  shouldSetResponder() {
    return true;
  }

  handleResponderEnd(e, gestrue) {
    const direction = getDirectionFromGesture(gestrue);

    console.log(direction);
  }

  // ==== lifecycle ====

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponderCapture: this.shouldSetResponder,
      onPanResponderEnd: this.handleResponderEnd
    });
  }

  componentDidMount() {
    this.startGame();
  }

  render() {
    const { score, bestScore, boardData, isGameOver } = this.state;

    return (
      <View style={styles.wrapper}>
        <View style={styles.gameHeadWrapper}>
          <GameHead title="2048" score={score} bestScore={bestScore} />
        </View>
        <View style={styles.instruments}>
          <Text style={styles.instrumentsText}>
            Join the numbers and get to <Text style={styles.strongText}>the 2048 tile!</Text>
          </Text>
          <GameButton onPress={this.handleButtonPress}>New Game</GameButton>
        </View>
        <View style={styles.gameBoradWrapper} {...this._panResponder.panHandlers}>
          <GameBoard ref={c => { this._gameboard = c; }} dataSource={boardData} onLayout={this.handleBoardLayout} />
          {isGameOver && (
            <GameOver ref={c => { this._gameoverBackdrop = c; }} style={this._gameoverStyle}
              onRetry={this.handleButtonPress} onLayout={this.handleGameOverLayout} />
          )}
        </View>
      </View>
    );
  }
}

export default Game;
