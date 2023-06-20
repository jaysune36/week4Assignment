// Question 1a
// For question 1a I created an array of numbers. I then printed to the console the first item in the array and subtracted the last item in the array dynamically with the length property. Since the last number in the array is greater than the first number this making the answer -90.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[0] - ages[ages.length - 1]);

// For 1b I then push a new number to the end of the array with the .push() method. This now makes the last number 9. I once again print to the console the first and last items within the array and subtract them. Since the last number is still bigger than the first number this causes the second number to be another negative number and then making another negative answer. Making the answer -6.
// Question 1b
ages.push(9);
console.log(ages[0] - ages[ages.length - 1]);

// For question 1c instead of just creating a loop I created a function. With coding we don't repeat ourselves this function is then later used on a differnt question as well. This function accept 1 parameter, an number array. The number array is then looped through to find the sum and added to the variable within the function. Once this is complete a return statement will return the sum and divide that sum the array length to find the average. For a even number I decided to use the Math.round() to round the number to the closes decimal point.
// Question 1c
function findAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return Math.round(sum / arr.length)
}

console.log(findAverage(ages));

// Question 2a
// Question 2a an array of names was created. The averageNameValue variable is created to hold the sum of the value of each name length. I then created a loop to loop through the names and find the number of characters in each name using the .length property and added those to my varialbe. I then print to the console the averageNameValue and divie that by the names.length to find the average. Once again for a whole number I used the Math.round() method.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let averageNameValue = 0;

for (let i = 0; i < names.length; i++) {
  averageNameValue += names[i].length;
}

console.log(Math.round(averageNameValue / names.length));

// 2b
// For question 2b I created a loop to concat strings together. The first thing was to create an empty string variable. I then used a loop to loop through the names array on line 26. This loop then concats each name within the names array and adds them to the strOfNames variable using a template literal. Lastly, I print to the console the strOfNames variable to display the new string of names.
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
// Quetion 5 was to push the length of each name to a new array. To do this I created an empty array called nameLengths. I again used a loop method to loop through all the names and with the 
// .push() method and length property I pushed the length of each name to the new array. I then printed that array to the console, using console.log.
let nameLengths = [];

for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length)
}

console.log(nameLengths);

// Question 6
// To find the sum of the new nameLengths array, I used a for of loop and created a sum variable. The loop adds each nameLength of the nameLengths array to the sum variable. The sum variable is then printed to the console.
let sum = 0;

for (let nameLength of nameLengths) {
  sum += nameLength;
}

console.log(sum);

// Question 7
// Using a function I called concatItself, the function will take 2 parameters(word, n). The 'word' parameter is for a str and the 'n' parameter is for a number. Then funtion then loops through using the 'n' as a counter of how many times to loop. The 'word' parameter is then added to the empty str varialbe the 'n' number of times with no spaces. The str variable is then returned. Lastly, I printed to the console 'Hello', 3x and then returned "HelloHelloHello"
function concatItself(word, n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    str += word;
  }
  return str;
}

console.log(concatItself('Hello', 3));

// Quetion 8
// For question 8 I created an arrow function called fullName. This function accepts 2 parameters, both strings. Each string should be a first name and last name and then using a template literal to print to the console. I then printed to the console first name "John" and last name "Smith" to give the output "John Smith".
let fullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(fullName('John', 'Smith'));

// Question 9
// To complete question 9-13 I creted 4 different arrays to test. For question 9 I created an array function called sumOfArray and find if the that array sum is greater than 100. Within this function I used the reduce method to find the sum of the array and compare if that array is greater than 100. I printed 3 test to the console and 1 comes back as true as it is the only one over 100. Although test 3 equals 100, since the question asked for numbers greater than 100 this test comes back as false.
let testArrayOne = [10, 10, 10, 25]; //sum 55
let testArrayTwo = [2, 10, 65, 14, 1, 23, 51]; // sum 166
let testArrayThree = [15, 15, 60, 10]; // sum 100
let testArrayFour = [20, 10, 5]; // sum 35

let sumOfArray = (arr1) => arr1.reduce((a, b) => a + b) > 100;

console.log(sumOfArray(testArrayOne)); //false
console.log(sumOfArray(testArrayTwo)); //true
console.log(sumOfArray(testArrayThree));// false

// Question 10
// Since quetion 10 was to create a function to find the average, I used the previously created function from 1c to avoid repeating my code (DRY) and called it to testArrayFour to find the average of that array and print it to the console.
console.log(findAverage(testArrayFour));

// Question 11
// In order to find if the first array was greater than the second array, I created another function called arraysOverUnder. This function takes 2 parameters, both arrays, and will find the sum of each array using the reduce method and the greater than compare operator to output true or false if the first array is greater than the second array. I ran two test for the function using 2 of the 4 arrays previously created in each test as arguments. The first test outputs false and the second test outputs true as this is the test that the first array sum is greater than the second array sum.
function arraysOverUnder(arr1, arr2) {
  return (arr1.reduce((a, b) => a + b) > arr2.reduce((a, b) => a + b));
}

console.log(arraysOverUnder(testArrayOne, testArrayTwo)); // false
console.log(arraysOverUnder(testArrayThree, testArrayFour)) // true

// Question 12
// After creating the function willBuyDrink and the 2 parameters isHotOuside(boolean) and moneyInPocket(number) this will output if you can buy a drink. In order to recieve a boolean of true the isHotOutside argument must be true and the moneyInPocket number must be greater than 10.50. I ran 3 test output if you can buy a drink. 1 test comes back as true as this the only one that has both the true boolean and number greater than 10.50. While the other 2 test have atleast one false argument.
function willBuyDrink(isHotOutside, moneyInPocket) {
  return isHotOutside && moneyInPocket > 10.50;
}

console.log(willBuyDrink(true, 12)); // true
console.log(willBuyDrink(true, 9)); // false
console.log(willBuyDrink(false, 15)); // false

// Question 13
// For my final question I created my own function that will sort through an array and provide all the missing numbers within the array, I named this function missingNumbers. This function accepts 1 number array parameter. The first thing the function does is sort the array. Secondly, it will loop that and using the if statement compare if the first number is less than the second number by more than 1. If is not less than 1 it will will go the the numbers in the loop to compare. Once this statement runs true it will find that difference of those 2 numberes minus 1, because if I don't minus the one something like 8 - 2, would be six and we don't want to added the last number and get 8 as the final answer, we want 7 to be the final answer since 8 is already stated in the array. I then created a second loop to add each number by 1 and push that new missing number to the missingNums array. Last I return that new missingNums array within a template literal to let you know how many numbers were missing at that array of numbers. I tested this by running the testArrayTwo array and print to the console the missing numbers. 
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
  return `You had ${missingNums.length} missing numbers. Here are your missing numbers: 
  ${missingNums}`;
}

console.log(missingNumbers(testArrayTwo));