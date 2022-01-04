{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  //public
  //private
  //protected

  class CoffeeMachine {
    private static BEANS_GRAM_PER_SHOT:number = 7; //class Level
    private coffeeBeans:number = 0; // instance (object) level

    private constructor(coffeeBeans:number) {
      this.fillCoffeeBeans(coffeeBeans);
    }

    static makeMachine(coffeeBeans:number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans:number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
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

  const maker = CoffeeMachine.makeMachine(14);
  console.log(maker)
  maker.fillCoffeeBeans(10);
  console.log(maker)

  class User {
    get fullName():string {
      return  `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    // get age():number {
    //   return this.internalAge;
    // }

    set age(num:number) {
      this.internalAge = num;
    }
    constructor(private firstName:string, public lastName:string) {


    }
  }

  const user = new User('Steve', 'Jobs')
  console.log(user.fullName);
  user.age = 6;
  
}