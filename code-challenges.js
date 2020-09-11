// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

//function that takes a number
const divisibleByThree = (number) => {
  //check if mod is 0
  if (number % 3 === 0) {
    //return true stament
    return `${number} is divisible by three`
  } else {
    //return false statement
    return `${number} is not divisible by three`
  }
}

console.log(divisibleByThree(num1)); //expect "15 is divisible by three"
console.log(divisibleByThree(num2)); //expect "0 is divisible by three"
console.log(divisibleByThree(num3)); //expect "-7 is divisible by three"

// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

//function that takes an array of strings
const capitalizeWords = (array) => {
//make new array so as not to destroy original data
//map over capitalize first letter, add remaining lowercase letters
  let capitalizedArray = array.map(value => value[0].toUpperCase() + value.slice(1))
  //return new array
  return capitalizedArray
}

console.log(capitalizeWords(randomNouns)); // expect ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

//Create function that takes in an array of multiple data types
const onlyNumbersAscending = (array) => {
//filter to create new array of numbers
//sort numbers from least to greatest (needs compare function)
//return new array
  return array.filter(value => typeof value === "number").sort(function(a, b){return a-b})
}

console.log(onlyNumbersAscending(mixedDataArray)); //expect [-8, 0, 8, 46, 59, 90, 107]

// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

//Create additional edge case variables
var vowelTester3 = "rhythm"
// Expected output: 2
var vowelTester4 = "yardage"
// Expected output: 1

//Create a function that takes in a string
const firstVowel = (string) => {
  //make a vowel array excluding y
  const vowels = ["a", "e", "i", "o", "u"]
  //make an array to hold first indices of each vowel
  let vowelFirstIndices = []
  //map over indices per vowel, store first instance of each in an array
  string.split("").map((value, index) => {if (string[index] === "a" || string[index] === "e" || string[index] === "i" || string[index] === "o" || string[index] === "u") {vowelFirstIndices.push(index)}})
  //find first index of y after index 0
  string.split("").map((value, index) => {if (string[index] === "y" && index !== 0) {vowelFirstIndices.push(index)}})
  //return lowest number from array
  return Math.min(...vowelFirstIndices)
}

console.log(firstVowel(vowelTester1)); //expect: 1
console.log(firstVowel(vowelTester2)); //expect: 3
console.log(firstVowel(vowelTester3)); //expect: 2
console.log(firstVowel(vowelTester4)); //expect: 1

// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

//Create function that takes two numbers and one mathematical operation
const calculator = (number1, operator, number2) => {
  //Edge case: error message if trying to divide by 0
  if (operator === "/" && number2 === 0) {
    return "Can't divide by 0!"
  } else {
    //Eval arguments in order
    return eval(`${number1} ${operator} ${number2}`)
  }
}

// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// Expected output: 27

console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"

// --------------------6) Create a function that takes in the following variable and returns only the websites that end in ".io".

var websites = ["codepen.io", "codecademy.com", "coursera.org", "codepen.io", "udemy.com", "pluralsight.com", "udacity.com", "sitepoint.com"]
// Expected output: "codepen.io" "codepen.io"

//Create a function that takes an array of strings
const ioFinder = (array) => {
  //Return filtered array of of all strings === end in .io
  return array.filter(value => value.slice(-3) === ".io")
}

console.log(ioFinder(websites)); //expect [codepen.io, codepen.io]

// --------------------6) STRETCH: Write a function that takes a number as an argument and uses a WHILE loop to count up to that number from 0.

//Create a function that takes a number
const countUp = (number) => {
  //initialize i to start from 0
  var i = 0
  //Use WHILE loop to count 0, 1, 2, number
  while (i < number + 1) {
    console.log(i);
    i++
  }
}

countUp(3) //expect 0, 1, 2, 3
