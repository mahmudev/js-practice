// ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে

function celciusToFahrenheit(cecius) {
  let result = cecius * 1.8 + 32;
  return result;
}
console.log(celciusToFahrenheit(30));

// ২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে।

function fahrenheitToCelcius(fahrenheit) {
  let result = (fahrenheit - 32) * 0.5556;
  return result.toFixed(0);
}

console.log(fahrenheitToCelcius(550));

// ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।

function gradeSystem(number) {
    if (number >= 80) {
        console.log("Your grade is A+");
    } else if (number >= 60) {
        console.log("Your grade is B");
    } else if (number >= 50) {
        console.log("Your grade is C");
    } else if (number >= 40) {
        console.log("Your grade is D");
    } else {
        console.log("Your grade is F");
    }
    
}

let yourNumber = 57;
let yourGrade = gradeSystem(yourNumber);
console.log(yourGrade)

// ৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো।

function calculateInterest(principal, rate, years) {
    let result = principal * rate * years / 100;
    return result
  }
  
  let principal = 1000;
  let rate = 5;
  let years = 1;
  let interest = calculateInterest(principal, rate, years);
  console.log(interest); 
  