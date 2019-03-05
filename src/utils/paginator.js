/* eslint-disable no-restricted-syntax */
/* eslint-disable no-var */
/* eslint-disable no-mixed-operators */

const paginate = (c, m) => {
  const current = c;
  const last = m;
  const delta = 2;
  const left = current - delta;
  const right = current + delta + 1;
  const range = [];
  const rangeWithDots = [];
  var l;

  for (let i = 1; i <= last; i += 1) {
    if (i === 1 || i === last || i >= left && i < right) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
};

export default paginate;
