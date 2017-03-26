import React, { Component, PropTypes as T } from 'react';
import { View, Animated } from 'react-native';

const noop = () => {};

const SquareView = props => {
  const { children, style, animated, ...others } = props;
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

SquareView.propTypes = {
  animated: T.bool
};
SquareView.defaultProps = {
  animated: false
};

export default SquareView;