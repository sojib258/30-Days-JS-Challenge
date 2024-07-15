// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.



const number = 9
const result = (number % 2 === 0) ? "Even" : "Odd"

console.log(result)


// Task 7: Write a program to check if a year is leap year using multiple conditons(dividible by 4, but not 100 unless also divisible by 400) and log the result to the console.


const year = 2024; 
let isLeapYear;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            isLeapYear = true;
        } else {
            isLeapYear = false;
        }
    } else {
        isLeapYear = true;
    }
} else {
    isLeapYear = false;
}

if (isLeapYear) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}






