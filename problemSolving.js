// 1 থেকে n পর্যন্ত সংখ্যার যোগফল নির্ণয় করো।

// function totalSum(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }

// alternative way using (n*(n+1))/2

// function sumOfn(n) {
//   let result = (n * (n + 1)) / 2;
//   return result;
// }

// console.log(sumOfn(10))

// console.log(totalSum(10));

// ৩ এর নামতা লিখো জাভাস্ক্রিপ্ট ব্যাবহার করে।

// function timesTable(n) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i * n);
//   }
// }
// timesTable(3)

// এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে।

// ইনপুটঃ [-1,2,-3,4,5,6,-7,8,-9,10]

// আউটপুটঃ 3

// let number = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];

// function pnumber(number) {
   
//   let count = 0;
//   for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     if (element > 5) count++;
//   }

//   return count;
// }
// console.log(pnumber(number));

// let negitiveNumber = [-13,-1,-5,-7]


// তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো

// function lergestName(namne1, name2) {
//   if (namne1.length > name2.length) {
//     return namne1.split("").reverse().join("");
//   } else {
//     return name2.split("").reverse().join("");
//   }
// }

// console.log(lergestName("wrr", "qerqerqqqqq"));

// এমন একটা ফাংশন বানাবে যেটিতে তুমি ইনপুট হিসেবে পানির volume ইন্সারট করবে মিলিলিটারে। এই মিলিলিটারকে লিটারে কনভার্ট করে  ফাংশন তোমাকে রিটার্ন করবে।

// function militoliter (mili) {
//     return mili/1000;
// }
// console.log("In liter", militoliter(1222))

// একটা ফাংশন বানাবে যেটি একটি অ্যারে অফ অবজেক্ট রিসিভ করে প্যারামিটার হিসেবে।প্রতিটি অবজেক্টে একটি মানুষের নাম  এবং বয়স থাকবে। এখন তোমার কাজ হচ্ছে এই অ্যারে থেকে সবচেয়ে ছোট যে person কে খুঁজে বের করা।
// let people = [

//     {name:'sakib', age:30},

//     {name:'samiul', age:20},

//     {name:'sahid', age:50},

//     {name:'samin', age:10}

// ]
// function findSmallestPerson(people) {
//     let smallestPerson = people[0];
//     for (let i = 1; i < people.length; i++) {
//         if (people[i].age < smallestPerson.age) {
//             smallestPerson = people[i];
//         }
//     }
//     return smallestPerson.name;
// }
// console.log(findSmallestPerson(people))
