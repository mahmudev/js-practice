// problem#1

var macBook = 80000;
var gamingLaptop = 60000;
var lanovoYoga = 40000;
var oldLaptop = 20000;
var moneyHave = 60000;
if (moneyHave == macBook) {
  console.log("will buy macbook")
}
else if (moneyHave <= gamingLaptop ) {
  console.log("gaming laptop")
}
else if (moneyHave <= lanovoYoga ) {
  console.log("lanovo yoga")
}
else if (moneyHave <= oldLaptop ) {
  console.log("oldlaptop")
}
else{
  console.log("mobile is batter ")
}

// problem#2

for (let i = 0; i <= 39; i++) {

  console.log("ajke amr mon valo nei")
}

// problem#3

for (let i = 58; i <= 98; i++) {
  console.log(i)
}

// problem#4

for (let i = 412; i <= 456; i += 2) {
  console.log(i);
}

// problem#5

for (let i = 582; i <= 623; i += 2) {
  console.log(i);
}

// problem#6

var mySkills =["java", "c", "c#","python"];
for (let i = 0; i < mySkills.length; i++) {
  console.log(mySkills[i]) 
}

// problem#7

var myPhone =["samsung", "mi", "iphone","nokia"];
let i = 0;
while(i < myPhone.length) {
console.log(myPhone[i])
i++;
}

// problem#8

for(let i = 30; i <= 86; i++) {
  if(i === 44) {
  break;
  }
  console.log(i);
  }
  console.log("Loop broken at i = 44");
