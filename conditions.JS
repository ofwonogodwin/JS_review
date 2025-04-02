// Conditional Statements
// if, else if, else

let num1 = 6
let num2 = 4

if (num1>num2){
    console.log(num1," is greater than ",num2);
    console.log("Byee");
    
}
else{
    console.log(num2," Is greater than ",num1);
    console.log("Byee Byeeee");
    
    
}
 let mark = 67

 if(mark>=80 && mark<=100){
    console.log(mark," is grade 'A'");
    
 }
 else if(mark>=70 && mark<=79){
    console.log(mark," is grade 'B'");
    
 }
 else if(mark>=60 && mark<=69){
    console.log(mark," is grade 'C'");
    
 }
 else if(mark>=50 && mark<=59){
    console.log(mark," is grade 'D'");
    
 }
 else if(mark>=40 && mark<=49){
    console.log(mark," is grade 'E'");
    
 }
 else if(mark>=0 && mark<=39){
    console.log(mark," is grade 'F'");
    
 }
 else{
    console.log("Undefined Grade");
    
 }

//  added Ternary Operators
let num = 5
let result

result =num%2===0 ?"Even":"Odd"
console.log(result)

// Option 2
let numa = 8
let resulta

if(numa%2===0){
    resulta = "Even"
}
else{
    resulta="Odd"
}
console.log(numa," is an ",resulta," number");

//Alarm system.
let day = "Sunday"

if(day =="Monday"){
   console.log("It's 7am, Wake Up!!");
   
}
else if(day =="Friday"){
   console.log("It's 9am, Wake Up!!");
   
}
else if(day=="Saturday" || day=="Sunday"){
   console.log("It's 8am, Wake Up!!");
   
}
else{
   console.log("It's 4am, Wake Up!!");
   
}