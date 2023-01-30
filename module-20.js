// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 

function displayMultiplicationTable(number) {
  for (var i = 1; i <= 10; i++) {
    const result = i * number;
    console.log(result)
  }
}
displayMultiplicationTable(13)

// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

function makeLowerCase(text){
  let result = text.toLowerCase();
  console.log(result)
}
makeLowerCase("THIS IS TEST")

// ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে।

function fullName(firstName, lastName){
  var result = firstName + " " +lastName;
  console.log(result)
}
fullName("Mahmud", "Islam")


// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

function makeSquare(number){
  var result = number*number;
  console.log(result)
}
makeSquare(5)

// ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :

// const pizza = {
//  toppings: ['cheese', 'sauce', 'pepperoni'],
//  crust: 'deep dish',
//  serves: 2
// }
// এবং pepperoni প্রিন্ট করবা।

const pizza = {
 toppings: ['cheese', 'sauce', 'pepperoni'],
 crust: 'deep dish',
 serves: 2
}
var result = pizza.toppings[2];
console.log(result);
