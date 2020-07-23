let userInput = Number(prompt("Enter The Marks:- "));
let grade = null;

let result = (userInput >= 35 && userInput <= 45) ? grade = `Marks are ${userInput} and grade is C` : ((userInput > 45 && userInput <= 55) ? grade = `Marks are ${userInput} and grade is B` : ((userInput > 55 && userInput <= 75) ? grade = `Marks are ${userInput} and grade is A` :((userInput > 75 && userInput <=100) ? grade = `Marks are ${userInput} and grade is A+` :((userInput < 35) ? grade = "Sorry!! You Are Fail,Try Better Next Time" : grade = "Invalid Marks !!")))); //Using Ternary Operator

console.log(result);