// 1) Write an arrow function that will take 3 parameters, will multiply
// the parameters and will return the result.

const multiply = (a, b, c) => a * b * c;

// console.log(multiply(2,3,5));

// 2) Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat biryani.

const threeLine = `
I am a web developer.
I love to code.
I love to eat biryani`;

// console.log(threeLine)

// 3) Write an arrow function that will take 2 parameters: One parameter
// will come from you and the other parameter will be a default
// parameter. Add these two parameters and return the result.

const twoArrow = (a, b = 2) => a + b;

// console.log(twoArrow(2))

// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result
// Print the result.

const filterEvenLengthNames = (friends) => friends.filter((name) => name.length % 2 === 0);

const friendNames = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

// console.log(filterEvenLengthNames(friendNames));

// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
// Print the result.

// const averageOfSquaredElements = (arr) => {
//     const squaredArray = arr.map(num => num * num);
// console.log(squaredArray);
//     const sumOfSquaredElements = squaredArray.reduce((acc, curr) => acc + curr);
// console.log(sumOfSquaredElements);
//     const average = sumOfSquaredElements / squaredArray.length;
//     return average;
//   }
  
//   console.log(averageOfSquaredElements([1, 2, 3, 4, 5])); // Output: 11
