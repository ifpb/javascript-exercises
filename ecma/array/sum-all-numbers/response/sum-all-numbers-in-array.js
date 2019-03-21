function sumIntegerInArray(array) {
  let sum = 0;

  array.forEach(element => {
    if (Array.isArray(element)) {
      sum = sum + sumIntegerInArray(element);
    } else {
      sum = sum + element;
    }
  });

  return sum;
}

export { sumIntegerInArray };
