const student=
{
    name:"helsinki",
    age:24,
    projects:{
        dicegame:"two player dice game using javascript"
    }

}
let {name,age,projects:{dicegame}}=student;
console.log (name,"\n",age,"\n",dicegame);
