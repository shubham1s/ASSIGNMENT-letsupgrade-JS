let userInput = prompt("Enter The OS Name And Version:- ");  //User Input
let arr = userInput.split(" "); // Converting String Into Array By split()
let osDetails = `The OS name is ${arr[0]} and version is ${arr[1]}.`;

console.log(osDetails); //output to console 