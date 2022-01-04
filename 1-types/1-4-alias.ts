{
  /*
  *Type Aliases
  */
 type Text = string;
 const name:string = 'ellie';
 const name2:Text = 'ellie';
 type Num = number;
 type Student = {
   name: string,
   age: number;
 }
 const student: Student = {
   name: 'dog',
  age: 12,
 }

 //String Literal Types
 type Name = 'name';
 let ellieName: Name;
 ellieName = 'name';
 type JSON = 'json'
 const josn: JSON = 'json'

 type Boal = true;
 const isCat:Boal = true;
}