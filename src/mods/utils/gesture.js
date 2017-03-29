export const getDirectionFromGesture = gesture => {
  const { dx, dy } = gestrue;
  let direction;
  // horizontally
  if (Math.abs(dx) >= Math.abs(dy)) {
    if (dx > 0) direction = 'right';
    else direction = 'left';
  } else { // vertically
    if (dy > 0) direction = 'down';
    else direction = 'up';
  }
  return direction;
}
