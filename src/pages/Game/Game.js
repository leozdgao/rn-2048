import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import GameHead from '../../mods/GameHead/GameHead';
import GameButton from '../../mods/GameButton/GameButton';
import GameBoard from '../../mods/GameBoard/GameBoard';
import { randFloor } from '../../mods/utils';

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
      boardData: []
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
      boardData: []
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
    });
  }

  handleButtonPress = () => {
    this.startGame();
  }

  componentDidMount() {
    this.startGame();

    this.clr = setInterval(() => {
      if (this.slut.length > 0) {
        this.generateNextTile();
      } else {
        alert('Game Over');
        clearInterval(this.clr);
      }
    }, 1000);
  }

  render() {
    const { score, bestScore, boardData } = this.state;

    return (
      <View style={styles.wrapper}>
        <View style={styles.gameHeadWrapper}>
          <GameHead title="2048" score={score} bestScore={bestScore} />
        </View>
        <View style={styles.instruments}>
          <Text style={styles.instrumentsText}>Join the numbers and get to the 2048 tile!</Text>
          <GameButton onPress={this.handleButtonPress}>New Game</GameButton>
        </View>
        <View style={styles.gameBoradWrapper}>
          <GameBoard dataSource={boardData} />
        </View>
      </View>
    );
  }
}

export default Game;
