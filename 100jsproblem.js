// 01. Creates a function that takes two numbers as arguments and return their sum.

// function addition(a, b) {
//   return a + b;
// }

// console.log(addition(10, 20)); // 30
// console.log(addition(30, 20)); // 50
// console.log(addition(10, 90)); // 100

// 02. Converts hours into seconds.

// function howManySeconds(hours) {
//   return hours * 60 * 60;
// }

// console.log(howManySeconds(12)); // 43200
// console.log(howManySeconds(8)); // 28800
// console.log(howManySeconds(3)); // 10800

// 03. Converts minutes into seconds.

// function convert(minutes) {
//   return minutes * 60;
// }

// console.log(convert(30)); // 1800
// console.log(convert(10)); // 600
// console.log(convert(20)); // 1200

// 04. Calculates total points of a team from number of wins(3pts), draws(1pt), and losses(0pt).

// function footballPoints(wins, draws, losses) {
//   let totalPoints = wins * 3 + draws * 1 + losses * 0;

//   return totalPoints;
// }

// console.log(footballPoints(4, 3, 1)); // 15
// console.log(footballPoints(10, 5, 0)); // 35
// console.log(footballPoints(11, 0, 9)); // 33

// 05. Write functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

// function bitwiseAND(n1, n2) {
//   let answer = n1 & n2;
//   return (answer);
// };

// function bitwiseOR(n1, n2) {
//   let answer = n1 | n2;
//   return (answer);
// };

// function bitwiseXOR(n1, n2) {
//   let answer = n1 ^ n2;
//   return (answer);
// };

// console.log(bitwiseAND(10, 20)); // 0
// console.log(bitwiseOR(10, 20)); // 30
// console.log(bitwiseXOR(10, 20)); // 30

// 06. Write Function to return first value of an array.

// function getFirstValue(arr) {
//   return arr[0];
// };

// console.log(getFirstValue(["Saab", "Volvo", "BMW"])); // Saab
// console.log(getFirstValue([3, 5, 1])); // 3
// console.log(getFirstValue(['hello', 'world', 'welcome'])); // hello

// 07. Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// function addition(num){
//   return num+1;
// };

// console.log(addition(5)); // 6
// console.log(addition(100)); // 101
// console.log(addition(99)); // 100

// 08. Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// function lessThan100(a, b) {
//   if (a + b < 100) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(lessThan100(10, 20)); // true
// console.log(lessThan100(50, 60)); // false
// console.log(lessThan100(20, 50)); // true

// 09. Create a function that returns true when num1 is equal to num2; otherwise return false.

// function isSameNum(num1, num2) {
//   if (num1 == num2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isSameNum(30, 30)); // true
// console.log(isSameNum(20, 40)); // false
// console.log(isSameNum(50, 50)); // true

// 10. Write function to return the square of a number.

// function squared(a) {
//   return a * a;
// }

// console.log(squared(6)); // 36
// console.log(squared(9)); // 81
// console.log(squared(4)); // 16

// 11. Write function to calculate Perimeter of Rectangles

// function findPerimeter(height, width) {
//   let result = height * 2 + width * 2;
//   return result;
// }

// console.log(findPerimeter(20, 50)); // 140
// console.log(findPerimeter(80, 30)); // 220
// console.log(findPerimeter(10, 40)); // 100

// 12. Add up all the numbers from 1 to the number you passed to the function.

// function addUp(num) {
//   let sum = 0;
//   for (let i = 0; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(addUp(10)); // 55
// console.log(addUp(40)); // 820
// console.log(addUp(15)); // 120

// 13. Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.

// function profitableGamble(prob, prize, pay) {
//   if (prob * prize > pay) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(profitableGamble(2, 10, 20)); // false
// console.log(profitableGamble(5, 10, 40)); // true
// console.log(profitableGamble(6, 3, 30)); // false




function validateNumber() {
    // Generate a random 4-digit number
    var randomNumber = Math.floor(Math.random() * 9000) + 1000;
    console.log(randomNumber)
    // Get the user's input
    var userInput = prompt("Please enter the 4-digit number: ");
  
    // Validate the user's input
    if (userInput == randomNumber) {
      alert("Congratulations, the numbers match!");
    } else {
      alert("Sorry, the numbers do not match. The correct number was " + randomNumber + ".");
    }
  }
  
  validateNumber();