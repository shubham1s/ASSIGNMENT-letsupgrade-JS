let userInput = Number(prompt("Enter The Marks:- "));
let grade = null;

switch (true) {
    case (userInput >= 35 && userInput <= 45):
        grade = `Marks are ${userInput} and grade is C`;
        break;
    case (userInput > 45 && userInput <= 55):
        grade = `Marks are ${userInput} and grade is B`;
        break;
    case (userInput > 55 && userInput <= 75):
        grade = `Marks are ${userInput} and grade is A`;
        break;
    case (userInput > 75 && userInput <=100):
        grade = `Marks are ${userInput} and grade is A+`;
        break;
    case (userInput < 35):
        grade = "Sorry!! You Are Fail,Try Better Next Time";
        break;
    default:
        grade = "Invalid Marks !!";
        break;
}

let result = `${grade}.`;
console.log(result);