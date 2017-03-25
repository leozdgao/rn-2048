import React, { Component } from 'react';
import { Text, Animated } from 'react-native';
import SquareView from '../SquareView/SquareView';
import styles from './styles';

class GameTile extends Component {
  state = {
    opacity: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(
      this.state.opacity,
      { toValue: 1, duration: 250 }
    ).start();
  }

  render() {
    const { style, data, ...others } = this.props;
    const { opacity } = this.state;
    const external = {
      opacity,
      transform: [
        { scale: opacity }
      ]
    };
    const tileStyle = [
      styles.wrapper,
      style,
      external
    ];

    return (
      <SquareView animated style={tileStyle} {...others}>
        <Text style={styles.text}>{data}</Text>
      </SquareView>
    );
  }
}

export default GameTile;