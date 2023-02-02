// problem#1

var fruits = ["apple","banana","orange"];
var result = fruits.indexOf("banana")
var result = fruits.pop("banana");
var result = fruits.push("watermelon");
console.log(result)

// problem#2

let number = 85;
let scoreTom = 66;
let scoreJane = 95;
let scorePeter = 56;
let scoreJohn = 40;

if (number >= 80) {
    console.log("Your grade is A");
} else if (number >= 60) {
    console.log("Your grade is B");
} else if (number >= 50) {
    console.log("Your grade is C");
} else if (number >= 40) {
    console.log("Your grade is D");
} else {
    console.log("Your grade is F");
}

// problem#3

if (13 > 79 && 13 > 45) {
    console.log('13 is the largest number');
  } 
  else if (79 > 45) {
    console.log('79 is the largest number');
  } 
  else {
    console.log('45 is the largest number');
  }
 
  
  if (9 === 8 || 8 === 9 || 9 === 9) {
    console.log('This triangle is Isosceles!')
  } else {
    console.log('This triangle is not Isosceles')
  }
  