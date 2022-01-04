{
  //Enum
  //JavaScript -> No Enum 상수를 변수에 정할때
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY":1, "WEDNESDAY":2})
  const dayOfToday = DAYS_ENUM.MONDAY;

  //TypeScript
  enum Days { //enum은 type이 될수도있음
    Monday = 1, //=1 이라고 지정해주지 않으면 0부터 시작함하하고, 숫자가 아니라 문자열도 할당할수있음 
    Tuesday, 
    Wednesday, 
    Thursday, 
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  const day:Days = Days.Saturday;
  console.log(day);
}