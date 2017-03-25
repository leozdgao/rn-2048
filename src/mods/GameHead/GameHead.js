import React, { Component, PropTypes as T } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import { mergeStyleFromProps } from '../utils';
import styles from './styles';

const GameHead = props => {
  const { title, score, bestScore, style } = props;

  return (
    <View style={[ style, styles.wrapper ]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.scoreWrapper}>
        <ScoreBoard style={styles.scoreItem} score={score} title="SCORE" />
        <ScoreBoard style={styles.scoreItem} score={bestScore} title="BEST" />
      </View>
    </View>
  );
};

GameHead.propTypes = {
  title: T.string.isRequired,
  score: T.number,
  bestScore: T.number
};
GameHead.defaultProps = {
  score: 0,
  bestScore: 0
};

export default GameHead;
