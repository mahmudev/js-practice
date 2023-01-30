// problem#1

function make_avg(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    total = total + number;
  }
  var average = total / numbers.length;
  return average;
}
var arrayNum = [5, 7, 8, 5, 6, 4, 8, 0];
console.log(make_avg(arrayNum));



