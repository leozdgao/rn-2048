import React, { Component, PropTypes as T } from 'react';
import { View, Text, Animated } from 'react-native';
import GameButton from '../GameButton/GameButton';
import styles from './styles';

class GameOver extends Component {
  static propTypes = {
    onRetry: T.func
  }

  state = {
    top: new Animated.Value(-20)
  }

  setNativeProps = (...args) => {
    this._root.setNativeProps(...args);
  }

  componentDidMount() {
    Animated.timing(
      this.state.top,
      { toValue: 0, duration: 250 }
    ).start();
  }

  render() {
    const { onRetry, style, ...others } = this.props;
    const external = {
      top: this.state.top
    };

    return (
      <View style={[ styles.wrapper, style ]} ref={c => { this._root = c; }} {...others}>
        <Animated.View style={[ styles.innerWwrapper, external ]}>
          <Text style={styles.text}>Game Over!</Text>
          <GameButton onPress={onRetry}>Retry</GameButton>
        </Animated.View>
      </View>
    );
  }
}

export default GameOver;
