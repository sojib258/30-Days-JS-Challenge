// Task 5: Write a program that uses a switch case to assign a grade ("A", "B", "C", "D", "F") based on a score and log the grade to the console.


const score = 70
let grade
switch(true){
  case (score >= 80):
    grade = "A";
    break;
  case (score >= 70):
    grade = "B";
    break;
  case (score >= 60):
    grade = "C";
    break;
  case (score >= 50):
    grade = "D";
    break;
  case (score < 50):
    grade = "F";
    break;
}


















