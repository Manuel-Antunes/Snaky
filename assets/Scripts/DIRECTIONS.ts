export type DIRECTION = {
  x: number;
  y: number;
};
const DIRECTIONS: {
  LEFT: DIRECTION;
  RIGHT: DIRECTION;
  UP: DIRECTION;
  DOWN: DIRECTION;
} = {
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 },
  UP: { x: 0, y: 1 },
  DOWN: { x: 0, y: -1 },
};
export default DIRECTIONS;
