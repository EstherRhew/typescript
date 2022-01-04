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

    constructor(coffeeBeans:number, private milk: MilkFrother, private sugar: SugarProvider) {
      this.fillCoffeeBeans(coffeeBeans);
    }

    // static makeMachine(coffeeBeans:number): CoffeeMachine {
    //   return new CoffeeMachine(coffeeBeans);
    // }

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
      const coffee = this.extract(shots);
      return this.milk.makeMilk(this.sugar.addSugar(coffee));
    }
  }

  interface MilkFrother {
    makeMilk(cup:CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }


  //싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk():void {
      console.log('Steaming some milk...');
    }
    makeMilk(cup:CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk():void {
      console.log('Fancy Steaming some milk...');
    }
    makeMilk(cup:CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk():void {
      console.log('Cold Steaming some milk...');
    }
    makeMilk(cup:CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }
  
  class NoMilk implements MilkFrother {
    makeMilk(cup:CoffeeCup): CoffeeCup {
      return cup;
    }
  }


  //설탕 제조기
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar from candy!!!');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }

  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar from jar~');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // class CaffeLatteMachine extends CoffeeMachine {
  //   constructor(beans:number, public readonly serialNumber:string, private milkFrother: MilkFrother) {
  //     super(beans)
  //   }

  //   makeCoffee(shots:number):CoffeeCup {
  //     const coffee = super.makeCoffee(shots);
  //     return this.milkFrother.makeMilk(coffee);
  //   }
  // }

  // class SweetCoffeeMaker extends CoffeeMachine {
  //   constructor(beans:number, private sugar: SugarProvider
  //     ) {
  //     super(beans);
  //   };
  //   makeCoffee(shots:number): CoffeeCup {
  //     const coffee = super.makeCoffee(shots);
  //     return this.sugar.addSugar(coffee);
  //   }
  // }

  // class SweetCaffeLatteMaker extends CoffeeMachine {
  //   constructor(beans:number, private milkFrother:MilkFrother, private sugar: SugarProvider) {
  //     super(beans);
  //   };

  //   makeCoffee(shots:number): CoffeeCup {
  //     const coffee = super.makeCoffee(shots);
  //     return this.milkFrother.makeMilk(this.sugar.addSugar(coffee));
  //   }

  // }

  // const milk = new CheapMilkSteamer();
  // const sugarr = new CandySugarMixer();
  // const machine = new CoffeeMachine(23);
  // const latteMachine = new CaffeLatteMachine(23, 'ssss', milk);
  // const coffee = latteMachine.makeCoffee(1);
  // console.log(coffee);
  // console.log(latteMachine.serialNumber);

  // const machines:CoffeeMaker[] = [
  //   new CoffeeMachine(16),
  //   new CaffeLatteMachine(16, 'SSS', milk),
  //   new SweetCoffeeMaker(16, sugarr),
  //   new CoffeeMachine(16),
  //   new CaffeLatteMachine(16, 'SSS', milk),
  //   new SweetCoffeeMaker(16, sugarr)
  // ]
  // machines.forEach(machine => {
  //   console.log('----------------');
  //   machine.makeCoffee(1);
  //   //machine.clean();
    
  // });

  //
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();

  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();

  //
  const sweetCandyMachine = new SweetCoffeeMaker(12, candySugar);
  const sweetMachine = new SweetCoffeeMaker(12, sugar);

  const latteMachine2 = new CaffeLatteMachine(12,'SS', cheapMilkMaker);
  const coldLatteMachine2 = new CaffeLatteMachine(12,'SS', coldMilkMaker);
  const sweetLatteMachine = new SweetCaffeLatteMaker(12, cheapMilkMaker, candySugar);
}