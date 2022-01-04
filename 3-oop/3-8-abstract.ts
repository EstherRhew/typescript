{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; //class Level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.fillCoffeeBeans(coffeeBeans);
    }

    // static makeMachine(coffeeBeans:number): CoffeeMachine {
    //   return new CoffeeMachine(coffeeBeans);
    // }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine...');
    }

    private grindBeans(shots: number) {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
      console.log(`Grinding beans...`);
    }

    private preheat(): void {
      console.log('Heating up...');
    }

    protected abstract extract(shots: number): CoffeeCup;
    // {
    //   console.log(`pulling ${shots} shots`);
    //   return {
    //     shots, //  shots: shots
    //     hasMilk: false,
    //   }
    // }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans)
    }
    private steamMilk(): void {
      console.log('Steaming some milk...');
    }
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      }
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      }
    }

  }





  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16, 'SSS'),
    new SweetCoffeeMaker(16),
    new CaffeLatteMachine(16, 'SSS'),
    new SweetCoffeeMaker(16)
  ]
  machines.forEach(machine => {
    console.log('----------------');
    machine.makeCoffee(1);
    //machine.clean();

  });
}