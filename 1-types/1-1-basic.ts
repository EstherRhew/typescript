
//unknown 똥
let notSure: unknown = 0;
notSure = true;
notSure = 'he';

//any 똥
let anything:any =0;
anything = 'hello';

//void 함수에서 아무것도 리턴하지 않을때 (명시 생략 가능)
function print():void {
  console.log('hello');
}

//never
function throwError(message: string): never {
  //message => server (log)
  //throw new Error(message)
  while(true) {}

  //object
  let obj: object; // primitive가 아닌 모든 것을 담을 수 있음
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({name:'ellie'});
  acceptSomeObject({animal:'dog'})
}