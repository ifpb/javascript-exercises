// BMI = weight/height²

let weight = 60
let height = 1.65
let result
let bmi = weight / height ** 2

if (bmi < 18.5) {
  result = "Underweight"
} else if (bmi >= 18.5 && bmi <= 24.9) {
  result = "Normal weight"
} else if (bmi >= 25 && bmi <= 29.9) {
  result = "Overweight"
} else {
  result = "Obesity"
}

console.log('BMI: ' + bmi + '\nResult: ' + result)