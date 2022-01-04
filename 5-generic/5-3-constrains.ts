interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log('full time!!');
  }
  workFullTime() { }
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log('part time!!');
  }
  workPartTime() { }
}

function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<E extends Employee>(employee: E): E {
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime;
bob.workPartTime;

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);
ellieAfterPay.workFullTime


const obj = {
  name: 'ellie',
  age: 20,
}

const obj2 = {
  animal: `dog`
}


function getValue<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key]
}

console.log(getValue(obj, 'name')); //ellie
console.log(getValue(obj, 'age')); //20
console.log(getValue(obj2, 'animal')); //dog
