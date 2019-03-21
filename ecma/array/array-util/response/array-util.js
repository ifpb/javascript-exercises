function min(array) {
  let minValue = array[0];

  for (let flag = 1; flag < array.length; flag++) {
    if (minValue > array[flag]) minValue = array[flag];
  }

  return minValue;
}

function max(array) {
  let maxValue = array[0];

  for (let value of array) {
    if (maxValue < value) maxValue = value;
  }

  return maxValue;
}

function range(length, last, step) {
  let begin = last ? length : 0;
  let end = last || length;
  step = step || 1;
  let result = [];

  for (let number = begin; number < end; number += step) {
    result.push(number);
  }

  return result;
}

function zip(...arrays) {
  let result = [];
  for (let index = 0; index < arrays.length; index++) {
    let values = [];
    for (let array = 0; array < arrays.length; array++) values.push(arrays[array][index]);
    result.push(values);
  }
  return result;
}

function uniq(array) {
  let result = [];
  for (let value of array) {
    if (!result.includes(value)) result.push(value);
  }
  return result;
}

function sortNum(array) {
  return array.sort((a, b) => a - b);
}

export { min, max, range, zip, uniq, sortNum };
