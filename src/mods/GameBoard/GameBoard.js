import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import SquareView from '../SquareView/SquareView';

const gutter = 15;

class GameBoard extends Component {
  state = {
    tileDimension: 0
  }

  handleDimension = dimension => {
    const tileDimension = (dimension - 5 * gutter) / 4;
    this.setState({
      tileDimension
    });
  }

  render() {
    const { tileDimension } = this.state;
    const tileDimensionStyle = {
      width: tileDimension,
      height: tileDimension
    };
    const children = []
    let i = 16;
    while(i--) {
      const tileStyle = [ styles.tile, tileDimensionStyle ];
      if (i % 4) {
        tileStyle.push(styles.tileGutterRight);
      }
      if (i >= 4) {
        tileStyle.push(styles.tileGutterBottom);
      }
      children.push(<SquareView key={i} style={tileStyle} />);
    }
    
    return (
      <SquareView style={styles.wrapper} onDimension={this.handleDimension}>
        {children}
      </SquareView>
    );
  }
}

export default GameBoard;
