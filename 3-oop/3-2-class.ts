{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  
  
  class CoffeeMachine {
    static BEANS_GRAM_PER_SHOT:number = 7; //class Level
    coffeeBeans:number; // instance (object) level


    constructor(coffeeBeans:number) {
      this.coffeeBeans = coffeeBeans
    }

    static makeMachine(coffeeBeans:number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    makeCoffee(shots:number):CoffeeCup {
      if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
      return {
        shots, //  shots: shots
        hasMilk: false,
      }
    }
  }

  const newMachine = new CoffeeMachine(14);
  console.log(newMachine);
  console.log(CoffeeMachine.makeMachine(20));
}