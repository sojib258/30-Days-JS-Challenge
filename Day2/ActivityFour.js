// Logical Operator
// Task 1: Write a program that uses the && operator to combine two conditions and log the result to the console.

// Task 2: Write a program that uses the || operator to combine two conditions and log the result to the console.

// Task 3: Write a program tha uses the ! operator to negate a condition and log the result to the console.



// Solution
// Task 1: 
const numOne = 20
const numTwo = 30
const numThree = 40
const booleanValue = false

if(numOne < numTwo && numTwo > numThree){
    console.log("Condition True from First Task")
}

// Task 2: 
if(numOne < numTwo || numTwo > numThree){
    console.log("Condition True from Second Task")
}

// Task 3:
if(!booleanValue){
    console.log("Condition negate")
}