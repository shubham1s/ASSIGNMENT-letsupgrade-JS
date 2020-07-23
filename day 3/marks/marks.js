let userInput = Number(prompt("Enter The Marks:- "));
let grade = null;

if (userInput >= 35 && userInput <= 45) {
    grade = `Marks are ${userInput} and grade is C`;
} else if (userInput > 45 && userInput <= 55) {
    grade = `Marks are ${userInput} and grade is B`;
} else if (userInput > 55 && userInput <= 75) {
    grade = `Marks are ${userInput} and grade is A`;
}
else if (userInput > 75 && userInput <=100){ 
    grade = `Marks are ${userInput} and grade is A+`;
}
else if (userInput < 35){
    grade = "Sorry!! You Are Fail,Try Better Next Time";
}
else{
    grade = "Invalid Marks !!";
}

let result = `${grade}.`;
console.log(result);

