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
  return results / arr1.length
}

console.log(averageAge(ages));
