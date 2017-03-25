export const mergeStyleFromProps = (props, ...args) => {
  const external = props.style || {};
  return [ external, ...args ];
}

export const createChainFunction = (...funcs) => {
  return function(...args) {
    funcs.filter(o => typeof o === 'function').forEach(func => {
      func(...args);
    });
  }
}

export const randFloor = (min, max) => {
  return Math.floor(min + Math.random() * (max - min));
}
