import React, { Component, PropTypes as T } from 'react';
import { View, Animated } from 'react-native';

const noop = () => {};

class SquareView extends Component {
  static propTypes = {
    animated: T.bool
  }

  static defaultProps = {
    animated: false
  }

  render() {
    const { children, style, animated, ...others } = this.props;
    const Wrapper = animated ? Animated.View : View;
    const external = {
      aspectRatio: 1
    };

    return (
      <Wrapper style={[ style, external ]} {...others}>
        {children}
      </Wrapper>
    );
  }
}

export default SquareView;