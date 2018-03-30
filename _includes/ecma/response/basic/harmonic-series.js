// h = 1/1 + 1/2 + ... + 1/n

let n = 10
let sum = 0

for (var number = 1; number < 10; number++) {
  sum += 1/number
}

console.log(`h(10): ${sum}`)
