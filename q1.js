// use 'strict';
var arrayOfNumbers =[1,2,3,4,5];
var bigerThan = 3;
var numbersOfNumberGreater=0;
 function greaterThan (arrayOfNumbers, bigerThan)
 {
    
     for ( var i =0 ; i < arrayOfNumbers.length ; i++)
     {
         if (arrayOfNumbers[i]> bigerThan){
         numbersOfNumberGreater++;



         }
     }
     console.log(numbersOfNumberGreater);

     return numbersOfNumberGreater;
 }
  var result =greaterThan(arrayOfNumbers,bigerThan);
  console.log("resylt", result);