// =========== CONDITIONALS =============
// Definition: perform different operations based on the given condition

// Task: define whether a number is positive or negative
let integer = 1

// inside the parenthesis in an if statement, we write a logical statement checking whether it's true or false
if(integer < 0) {
  // inside the curly brackets is our code block that runs IF we meet our condition
  console.log("Negative: " + integer)
} else {
  // if we didn't meet our logical statement, else code block will execute
  console.log("Positive: " + integer)
}

// Task: Setting up a security web site that grants users over the age of 18+ access to the site. Write a conditional that gives users who are 18+ access and logs access denied for users who do no meet the given condition.

// create if statement checking if age is 18+ and if less 18 log access denied
let age = 3

// if(age < 18) {
//   console.log("access denied: " + age)
// }

if(age >= 18) {
  console.log("access granted: " + age)
} else {
  // else doesn't accept a conditional statement
  console.log("access denied: " + age)
}

// Task:
/* 
  Nested if/else statement
  Declare a variable called num
  Add an if/else statement that checks if num is positive & greater than 100
  Add another statement to check if num is positive but less than 100
  Add a final statement to check if num is negative
*/

let num = '100'

// & is called ampersand
// && equals to AND
if(num > 100) {
  console.log(num + " is positive and greater than 100")
} else if(num < 100) {
  if(num > 0) {
    console.log(num + " is positive and less than 100")
  }
} else if(num < 0) {
  console.log(num + " is less than 0 AKA negative.")
} else {
  if(num === 100) {
    console.log("WE GOT A HUNDRED!!!")
  } else {
    console.log("error NaN " + num + " is a " + typeof(num))
  }
}

// Task: What is your letter grade?
/* 
  If student gets 90 or higher: log A
  If 80 or above: log B
  if 70 or above: log C
  if 55 or above: log D
  if below 55: log F
*/

let grade = 54

// JavaScript runs Top to Down approach
if(grade >= 90) {
  console.log('A')
} else if(grade >= 80) {
  console.log('B')
} else if(grade >= 70) {
  console.log('C')
} else if(grade >= 55) {
  console.log('D')
} else {
  console.log('F')
}

// =========== LOOPS =============

// Definition: A sequence of instructions that are repeated for either certain number of times or until a condition is met

// Syntax:
// for(statement 1; statement 2; statement 3) {
  // code block to be executed
//}

// Statement 1: executed before the loop - this is where code block starts
// Statement 2: condition for running the loop (the code block)
// Statement 3: Executed each time AFTER the loop (the code block) has been executed

// Task: loop that iterates from 0 to 9

// statement 1: declare our iterator
// Why 0? In programming we like to start count at 0
// i++ is equivalent to i = i + 1 also equals to i += 1

// const = TypeError: Assignment to constant variable.
// for(let i = 0; i < 10; i++) {
//   console.log(i)
// }

// if we declare i inside our for loop with let we will get: ReferenceError: i is not defined
// if we declare i with no keyword it's automatically considered a 'var' variable
// console.log('current value ', i)

// let and const are block scoped
// for(let i = 0; i < 10; i++) {
//   console.log("we're using i again", i)
// }

// Task: loop from 10 to 1
// for(let i = 10; i > 0; i--) {
//   console.log(i)
// }

// preincrement --i
// postincrement i++
// https://stackoverflow.com/questions/1546981/post-increment-vs-pre-increment-javascript-optimization

// task:
// 1: write a loop that outputs 1,3,5,7,9
// 2: write a loop that outputs 2,4,6,8,10

// 1
// i = i + 2
// i += 2
// i++ && i++
for(let i = 0; i < 20; i++) {
  console.log(i)
}

// 2
for(let i = 0; i <= 25; i = i + 2) {
  console.log(i)
}