{
  //Type Assertions 똥
  function jsStrFunc():any {
    return 34;
  }

  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong:any = 5;
  console.log((wrong as Array<number>).push(1)); //똥

  function findNumbers():number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers(); // 또는  const numbers = findNumbers()!;
  numbers!.push(2); // 똥
}