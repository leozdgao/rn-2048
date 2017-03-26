import React, { Component, PropTypes as T } from 'react';
import { View, Text, Animated } from 'react-native';
import styles from './styles';
import GameTile from '../GameTile/GameTile';
import SquareView from '../SquareView/SquareView';
import { createChainFunction } from '../utils';

const GUTTER_WIDTH = 15;
const CELL_NUMBER = 16;
const getTilePosition = (i, cellWidth, gutterWidth) => {
  const row = Math.floor(i / 4);
  const col = Math.floor(i % 4);

  return {
    top: gutterWidth + row * cellWidth + row * gutterWidth,
    left: gutterWidth + col * cellWidth + col * gutterWidth
  };
};

class GameBoard extends Component {
  static propTypes = {
    dataSource: T.array
  }

  static defaultProps = {
    dataSource: []
  }

  state = {
    cellDimension: 0
  }

  measure = (cb) => {
    this._root.measure(cb);
  }

  handleLayout = e => {
    const dimension = e.nativeEvent.layout.width;
    const cellDimension = (dimension - 5 * GUTTER_WIDTH) / 4;
    this.setState({
      cellDimension
    });
  }

  render() {
    const { dataSource, onLayout, ...others } = this.props;
    const handleLayout = createChainFunction(this.handleLayout, onLayout);
    const { cellDimension } = this.state;
    const externalWrapperStyle = {};
    if (!cellDimension) {
      externalWrapperStyle.opacity = 0;
    }
    const cellDimensionStyle = {
      width: cellDimension,
      height: cellDimension
    };
    const cellChildren = [];
    const tileChildren = [];
    let i = CELL_NUMBER;
    while (i--) {
      const cellStyle = [ styles.cell, cellDimensionStyle ];
      if (i % 4) {
        cellStyle.push(styles.cellGutterRight);
      }
      if (i >= 4) {
        cellStyle.push(styles.cellGutterBottom);
      }
      cellChildren.push(<SquareView key={`cell${i}`} style={cellStyle} />);

      const data = dataSource[i];
      if (data) {
        tileChildren.push(
          <GameTile data={data} key={`tile${i}`} style={[ styles.tile, cellDimensionStyle, getTilePosition(i, cellDimension, GUTTER_WIDTH) ]} />
        );
      }
    }
    
    return (
      <SquareView ref={root => { this._root = root; }} style={[ styles.wrapper, externalWrapperStyle ]} onLayout={handleLayout} {...others}>
        {cellChildren}
        {tileChildren}
      </SquareView>
    );
  }
}

export default GameBoard;
