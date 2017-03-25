import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import GameHead from '../../mods/GameHead/GameHead';
import GameButton from '../../mods/GameButton/GameButton';
import GameBoard from '../../mods/GameBoard/GameBoard';

class Game extends Component {
  state = {
    score: 0,
    bestScore: 0,
    boardData: []
  }

  render() {
    const { score, bestScore, boardData } = this.state;

    return (
      <View style={styles.wrapper}>
        <GameHead title="2048" score={score} bestScore={bestScore} />
        <View style={styles.instruments}>
          <Text style={styles.instrumentsText}>Join the numbers and get to the 2048 tile!</Text>
          <GameButton>New Game</GameButton>
        </View>
        <GameBoard dataSource={boardData} />
      </View>
    );
  }
}

export default Game;
