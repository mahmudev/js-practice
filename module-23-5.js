// ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো।

let number = 7;
while (number <= 19) {
  if (number % 2 !== 0) {
    console.log(number);
  }
  number++;
}

// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।

let arr = [1, 2, 3, 4, 5];

console.log(arr.length);

arr[3] = 100;
console.log(arr);

arr.push(6, 7);
console.log(arr);

arr.splice(5, 1);
console.log(arr);

// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো

let arr = [75, 82, 90, 77, 81];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 80) {
    console.log(arr[i]);
  }
}

// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো।

function calculateProduct(a, b, c) {
    return a * b * c;
  }

let result = calculateProduct(2, 3, 4);
console.log(result);

// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।

let obj = {
    prop1: "value1",
    prop2: "value2",
    prop3: "value3"
  };

  obj.prop2 = "new value";
  console.log(obj);

// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।

 function feetToInch(feet){
    return feet*12;
 }
console.log("Total Inch :",feetToInch(2))

// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।

function centimeterToMeter(centimeter) {
  return centimeter / 100;
}
console.log("Total Meter :", centimeterToMeter(200));

// ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে।

// এইবার ভালো করে খেয়াল করো।

// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা

// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা

// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা

// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে।

// উত্তর হিসেবে সংখ্যা রিটার্ন করবে।

function paperRequirements(numBook1, numBook2, numBook3) {
  let totalPages = numBook1 * 100 + numBook2 * 200 + numBook3 * 300;
  return totalPages;
}

let totalPages = paperRequirements(5, 5, 4);
console.log(totalPages);

// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।

function bestFriend(friends) {
  let bestFriend = friends[0];
  for (let i = 1; i < friends.length; i++) {
    if (friends[i].length > bestFriend.length) {
      bestFriend = friends[i];
    }
  }
  return bestFriend;
}

let friends = ["rgtwerf", "wrwe", "wqqaw"];
console.log(bestFriend(friends));

// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।

function extractPositiveNumbers(numbers) {
  let positiveNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      positiveNumbers.push(numbers[i]);
    } else {
      break;
    }
  }
  return positiveNumbers;
}

let numbers = [3, 7, -1, 9, -2, 12, 8, -3, 5];

console.log(extractPositiveNumbers(numbers));
