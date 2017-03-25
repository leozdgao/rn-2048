import React, { Component, PropTypes as T } from 'react';
import { View } from 'react-native';
import { createChainFunction } from '../utils';

const noop = () => {};

class SquareView extends Component {
  static propTypes = {
    onDimension: T.func
  }

  static defaultProps = {
    onDimension: noop
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
    const { children, style, onLayout, ...others } = this.props;
    const handleLayout = createChainFunction(this.handleLayout, onLayout);
    const { dimension } = this.state;
    const external = {};
    if (dimension) {
      external.height = dimension;
      external.width = dimension;
    }

    return (
      <View onLayout={handleLayout} style={[ style, external ]} {...others}>
        {children}
      </View>
    );
  }
}

export default SquareView;