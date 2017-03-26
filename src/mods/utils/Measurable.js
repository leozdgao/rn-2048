import React, { Component } from 'react';

const measurable = BaseComponent => {
  class Measurable extends Component {
    measure = (cb) => {
      this._c.measure(cb);
    }

    render() {
      return (
        <BaseComponent ref={c => { this._c = c; }} {...this.props} />
      );
    }
  }

  return Measurable;
};

export default measurable;