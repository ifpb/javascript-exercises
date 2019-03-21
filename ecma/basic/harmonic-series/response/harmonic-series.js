// h = 1/1 + 1/2 + ... + 1/n

const size = 10;
let sum = 0;

for (let number = 1; number <= size; number += 1) {
  sum += 1 / number;
}

console.log(`h(10): ${sum}`);
