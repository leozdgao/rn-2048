import React, { Component, PropTypes as T } from 'react';
import { View, Animated } from 'react-native';
import { createChainFunction } from '../utils';

const noop = () => {};

class SquareView extends Component {
  static propTypes = {
    onDimension: T.func,
    animated: T.bool
  }

  static defaultProps = {
    onDimension: noop,
    animated: false
  }

  state = {
    dimension: null
  }

  handleLayout = e => {
    const { width, height } = e.nativeEvent.layout;
    const dimension = Math.max(width, height);

    this.setState({
      dimension
    }, () => {
      this.props.onDimension(dimension);
    });
  }

  render() {
    const { children, style, onLayout, animated, ...others } = this.props;
    const { dimension } = this.state;
    const Wrapper = animated ? Animated.View : View;
    const handleLayout = createChainFunction(this.handleLayout, onLayout);
    const external = {};

    if (dimension) {
      external.height = dimension;
      external.width = dimension;
    }

    return (
      <Wrapper onLayout={handleLayout} style={[ style, external ]} {...others}>
        {children}
      </Wrapper>
    );
  }
}

export default SquareView;