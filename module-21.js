// Write a function that will take hour as the input parameter and will
// convert it into minutes and will return the result in minutes.

// function hoursToMinutes(hour) {
//     var minutes = 60;
//     var result = hour * minutes;
//     console.log(result)
// }
// hoursToMinutes(3)

// Write a function findLeapYear() that will take the array
// [2023,2024,2025,2028,2030] as the input parameter and will check if
// each year is a leap year. If a year is a leap year insert that year in a
// new array, return the new array and print the result.

function findLeapYear(years) {
  let leapYears = [];
  for (let i = 0; i < years.length; i++) {
    if (isLeapYear(years[i])) {
      leapYears.push(years[i]);
    }
  }
  console.log(leapYears);
}
function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
let years = [2023, 2024, 2025, 2028, 2030];
findLeapYear(years);

// Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
// as the input parameter and will return the sum of the odd numbers.