import React, { Component } from 'react';
import { TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const GameButton = props => {
  const { style, children, ...others } = props;

  return (
    <TouchableHighlight style={[ styles.wrapper, style ]} {...others}>
      <Text style={styles.text}>{children}</Text>
    </TouchableHighlight>
  );
}

export default GameButton;
