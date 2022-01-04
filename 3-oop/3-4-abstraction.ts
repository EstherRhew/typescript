{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots:number):CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots:number):CoffeeCup;
    fillCoffeeBeans(beans:number):void;
    clean():void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
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

    clean() {
      console.log('cleaning the machine...');
    }

    private grindBeans(shots:number) {
      if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
      console.log(`Grinding beans...`);
    }

    private preheat():void {
      console.log('Heating up...');
    }

    private extract(shots:number):CoffeeCup {
      console.log(`pulling ${shots} shots`);
      return {
        shots, //  shots: shots
        hasMilk: false,
      }
    }

    makeCoffee(shots:number):CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  
  const maker:CoffeeMachine = CoffeeMachine.makeMachine(14);
  maker.fillCoffeeBeans(32);
  maker.makeCoffee(2);

  const maker2:CoffeeMaker = CoffeeMachine.makeMachine(14);
  //maker2.fillCoffeeBeans(32);
  maker2.makeCoffee(2);

  const maker3:CommercialCoffeeMaker = CoffeeMachine.makeMachine(14);
  maker3.fillCoffeeBeans(32);
  maker3.makeCoffee(2);
  maker3.clean();

  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  pro.makeCoffee();

}