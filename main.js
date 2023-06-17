// Question 1a
let ages = [3,9,23,64,2,8,28,93];
console.log(ages[0] - ages[ages.length - 1]);
// 1b
ages.push(9);
console.log(ages[0] - ages[ages.length - 1]);
// 1c
let ageAverage = 0;
for(let i=0; i<ages.length; i++) {
  ageAverage += ages[i];
}

console.log(Math.round(ageAverage/ages.length));

// Question 2a
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let averageNameValue = 0;

  for(let i=0; i<names.length; i++){
    averageNameValue += names[i].length;
  }

console.log(Math.round(averageNameValue / names.length));

// 2b
let strOfNames = '';
  for(let i=0; i<names.length; i++){
    strOfNames += `${names[i]} `;
  }

console.log(strOfNames);

// Question 5
let nameLengths = [];

  for(let i=0; i<names.length; i++) {
    nameLengths.push(names[i].length)
  }

console.log(nameLengths);

// Question 6
let sum = 0;

for(let i=0; i<nameLengths.length; i++) {
  sum += nameLengths[i];
}

console.log(sum);

// Question 7
function concatItself(word, n) {
  let str = '';
  for(let i=0; i <n; i++) {
    str += word;
  }
  return str;
}

console.log(concatItself('Hello', 3));

// Quetion 8
let fullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(fullName('John', 'Smith'));

// Question 9
let sumOfArray = (arr1) => (arr1.reduce((a,b)=> a + b) > 100);

console.log(sumOfArray([20,10,5])); //false
console.log(sumOfArray([2,10,65,14,1,23,51])); //true
console.log(sumOfArray([15,15,60,10]));// false

// Question 10
function averageNumArr(arr1) {
  let average = 0;
  for(let i=0; i<arr1.length; i++) {
    average += arr1[i];
  }
  return average / arr1.length;
}

console.log(averageNumArr([10,10,10,25]))