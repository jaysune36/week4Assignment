let ages = [3,9,23,64,2,8,28,93];
let valueArrItems = (arr1, arr2) => arr1 - arr2;
console.log(valueArrItems(ages[0], ages[ages.length - 1]));
ages.push(9);
console.log(valueArrItems(ages[0], ages[ages.length - 1]));

function averageAge(arr1) {
  let results = 0;
  for(let i=0; i<arr1.length; i++) {
    results += arr1[i];
  }
  return Math.round(results / arr1.length);
}

console.log(averageAge(ages));

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

function calulateAvg(arr1) {
  let sum = 0;
  for(let i=0; i<arr1.length; i++){
    let name = arr1[i]
    sum += name.length;
  }
  let average = Math.round(sum / arr1.length);
  return average;
}
console.log(calulateAvg(names));

function concatStr(arr1) {
  let strOfNames = '';
  for(let i=0; i<arr1.length; i++){
    strOfNames += `${arr1[i]} `;
  }
  return strOfNames
}

console.log(concatStr(names));

let nameLengths = [];

function numStrArrayPush(arr1) {
  for(let i=0; i<arr1.length; i++) {
    nameLengths.push(arr1[i].length)
  }
};
numStrArrayPush(names);

console.log(nameLengths);
console.log(averageAge(nameLengths));

function concatItself(word, n) {
  let str = '';
  for(let i=0; i <n; i++) {
    str += word;
  }
  return str;
}

console.log(concatItself('Hello', 3));

let fullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(fullName('John', 'Smith'))