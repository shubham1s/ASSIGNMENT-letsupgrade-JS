function calculate(){     //sums The value

    let rawData = document.getElementById("textField").value;
    try{
    let answer = eval(rawData);
    document.getElementById("textField").value=answer;
    }catch(error){
       document.getElementById("textField").value="Invalid Expression";
       console.log(error);
    }

 }

 function clearInput(){ //clear the text field
 
    document.getElementById("textField").value="";

 }
 function clickInput(nameID){ //for button when clicked

    let a = document.getElementById(nameID).id;
    document.getElementById("textField").value+=a;
   
 }

 function squareRoot(){  // for square root

    let sq = document.getElementById("textField").value;
    sq=Math.sqrt(sq);
    sq = sq.toFixed(3);
    document.getElementById("textField").value=sq;
 }