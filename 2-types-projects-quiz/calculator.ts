/**
 * Let's make a calculator 🧮
 */

type Operator = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(operator:Operator, num1:number, num2:number):number { 
  switch (operator) {
    case 'add': 
      return num1 + num2;
      break;
    case 'substract':
      return num1 - num2;
      break;
    case 'multiply': 
      return num1 * num2;
      break;
    case 'divide' : 
      return num1 / num2;
      break;
    case 'remainder' : 
      return num1 % num2;
      break;
    default: 
      throw new Error('unknown command');
  }
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
