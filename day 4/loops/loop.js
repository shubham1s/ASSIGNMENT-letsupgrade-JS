let userPrompt = true;
let userInput = null;
let check = null;
let ifElse = null;
userInput = prompt("ENter A Number:- ");
while(userPrompt){
    
    check = userInput == null ? true : false;
    userInput =Number(userInput);

    ifElse = (userInput > 100 || check) ? userPrompt = false:userInput = Number(prompt("ENter A Number:- "));
}