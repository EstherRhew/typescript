{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots:number):CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT:number = 7; //class Level
    private coffeeBeans:number = 0; // instance (object) level

    constructor(coffeeBeans:number) {
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

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans:number, public readonly serialNumber:string) {
      super(beans)
    }
    private steamMilk():void {
      console.log('Steaming some milk...');
    }
    makeCoffee(shots:number):CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk:true,
      }
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots:number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      }
    }
  }


  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(23, 'ssss');
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  console.log(latteMachine.serialNumber);

  const machines:CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, 'SSS'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, 'SSS'),
    new SweetCoffeeMaker(16)
  ]
  machines.forEach(machine => {
    console.log('----------------');
    machine.makeCoffee(1);
    //machine.clean();
    
  });
}