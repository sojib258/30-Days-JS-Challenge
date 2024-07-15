// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 10;
let num2 = 20;
let num3 = 15;
let largest;

if (num1 >= num2) {
    if (num1 >= num3) {
        largest = num1;
    } else {
        largest = num3;
    }
} else {
    if (num2 >= num3) {
        largest = num2;
    } else {
        largest = num3;
    }
}

console.log(`The largest number is ${largest}.`);


// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.


const number = 5
let day
switch(number){
  case 1:
    day = "Monday";
    break;
  case 2: 
    day = "Tuesday";
  break
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  case 7:
    day = "Sunday";
    break
}

console.log("Day", day)