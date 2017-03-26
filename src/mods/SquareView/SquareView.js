import React, { Component, PropTypes as T } from 'react';
import { View, Animated } from 'react-native';

const noop = () => {};

class SquareView extends Component {
  static propTypes = {
    animated: T.bool
  };

  static defaultProps = {
    animated: false
  };

  measure = (cb) => {
    this._root.measure(cb);
  }

  render() {
    const { children, style, animated, ...others } = this.props;
    const Wrapper = animated ? Animated.View : View;
    const external = {
      aspectRatio: 1
    };

    return (
      <Wrapper ref={root => { this._root = root; }} style={[ style, external ]} {...others}>
        {children}
      </Wrapper>
    );
  }
}

export default SquareView;