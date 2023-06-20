// Question 1a
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[0] - ages[ages.length - 1]);
// 1b
ages.push(9);
console.log(ages[0] - ages[ages.length - 1]);
// 1c
let ageAverage = 0;
for (let i = 0; i < ages.length; i++) {
  ageAverage += ages[i];
}

console.log(Math.round(ageAverage / ages.length));

// Question 2a
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let averageNameValue = 0;

for (let i = 0; i < names.length; i++) {
  averageNameValue += names[i].length;
}

console.log(Math.round(averageNameValue / names.length));

// 2b
let strOfNames = '';
for (let i = 0; i < names.length; i++) {
  strOfNames += `${names[i]} `;
}

console.log(strOfNames);

// Question 3
// How do you access the last element of any array?
// ---- You can access the last element in an array by finding the length of the array and subtracting 1 within a bracket notation. Since array start at 0 when a length is given it will start from 1, this is the reason why you need to subtract 1.
// ex. array[array.length - 1]

// Question 4
// How do you access the first element of any array?
//  ---You can access the first element within in a array simply by putting a 0 within the brackets of an array list. Since array start at 0 this will always give you the first element within the array.
// ex. array[0]

// Question 5
let nameLengths = [];

for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length)
}

console.log(nameLengths);

// Question 6
let sum = 0;

for (let i = 0; i < nameLengths.length; i++) {
  sum += nameLengths[i];
}

console.log(sum);

// Question 7
function concatItself(word, n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    str += word;
  }
  return str;
}

console.log(concatItself('Hello', 3));

// Quetion 8
let fullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(fullName('John', 'Smith'));

// Question 9

let testArrayOne = [10, 10, 10, 25]; //sum 55
let testArrayTwo = [2, 10, 65, 14, 1, 23, 51]; // sum 166
let testArrayThree = [15, 15, 60, 10]; // sum 100
let testArrayFour = [20, 10, 5]; // sum 35

let sumOfArray = (arr1) => arr1.reduce((a, b) => a + b) > 100;

console.log(sumOfArray(testArrayOne)); //false
console.log(sumOfArray(testArrayTwo)); //true
console.log(sumOfArray(testArrayThree));// false

// Question 10
function averageNumArr(arr1) {
  let average = 0;
  for (let i = 0; i < arr1.length; i++) {
    average += arr1[i];
  }
  return average / arr1.length;
}

console.log(averageNumArr(testArrayFour));

// Question 11
function arraysOverUnder(arr1, arr2) {
  return (arr1.reduce((a, b) => a + b) > arr2.reduce((a, b) => a + b));
}

console.log(arraysOverUnder(testArrayOne, testArrayTwo)); // false
console.log(arraysOverUnder(testArrayThree, testArrayFour)) // true

// Question 12

function willBuyDrink(isHotOutsdie, moneyInPocket) {
  return isHotOutsdie && moneyInPocket > 10.50;
}

console.log(willBuyDrink(true, 12)); // true
console.log(willBuyDrink(true, 9)); // false
console.log(willBuyDrink(false, 15)); // false

// Question 13

function missingNumbers(arr1) {
  arr1.sort((a, b) => a - b);
  let missingNums = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < arr1[i + 1] - 1) {
      let difference = (arr1[i + 1] - arr1[i]) - 1;
      for (let j = 1; j <= difference; j++) {
          missingNums.push(arr1[i] + j);
      }
    }
  }
  return missingNums;
}

console.log(missingNumbers(testArrayTwo))