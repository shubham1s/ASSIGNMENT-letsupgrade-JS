/*Question 1:
        Write a program which does the following things:
        1. Takes a positive number from the user.
        2. Makes an array of numbers till the number given by user
        3. Use higher order function to filter the odd numbers
        4. Generate and array of the cubes of the filtered numbers */
        let num = Number(prompt("Enter A Positive Number :-"));
        let arr = [];
        
        for (i=0;i<=num;i++){
            arr.push(i);
        }
        let odd = arr.filter(items => items % 2 != 0);
        let oddCubes = odd.map(items => items * items * items);
        // console.log(arr);
         console.log("Odd Numbers Array = ",odd);
        console.log("Cube's of Odd Number's Array = ",oddCubes);