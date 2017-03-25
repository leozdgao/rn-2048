import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const ScoreBoard = props => {
  const { score, title, style } = props;

  return (
    <View style={[ styles.wrapper, style ]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
};

export default ScoreBoard;
