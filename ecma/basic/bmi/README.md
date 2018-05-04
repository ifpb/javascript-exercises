### [Body mass index (BMI)](code.zip)

| Category | BMI |
| -|- |
| Underweight | <18.5 |
| Normal weight | 18.5–24.9 |
| Overweight | 25–29.9 |
| Obesity | BMI of 30 or greater |

`{{ page.path | replace:'README.md','' }}code/bmi-if.js`:
```js
{% include_relative code/bmi-if.js %}
```

`{{ page.path | replace:'README.md','' }}code/bmi-switch.js`:
```js
{% include_relative code/bmi-switch.js %}
```

> Response: [bmi-if](response/bmi-if.js), [bmi-switch](response/bmi-switch.js)
