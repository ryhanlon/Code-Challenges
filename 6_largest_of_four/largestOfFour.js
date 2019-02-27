/* Return an array consisting of the largest number from each provided sub-array. */

// use sort - https://www.w3schools.com/js/js_array_sort.asp
// nest loops with comparisons
// 2 dementional array


// version: 1  | for loop
function largestOfFour1(arr) {
  // store the results
  let results = [];
  // outer loop to iterate through the outer array
  for (let i = 0; i < arr.length; i++) {
    // hold the largest number and initialise is with the first number
    let largeNum = arr[i][0];
    // create inner loop for iterate through the inner arrays
    for (let j = 1; j < arr[i].length; j++) {
      // compare the element of the sub-array to the currently stored largest number
      // if so, update the number in the variable
       if (arr[i][j] > largeNum) {
         largeNum = arr[i][j];
    }
  }
    // after the inner loop, save the largest number in the
    // corresponding position inside of the results array
    results[i] = largeNum;
 }
  console.log(results);
  return results;
}

// version: 2  |  forEach loop, .reduce(), Math.max()
const largestOfFour2 = (arr) => {
  let largestNums = [];
  arr.forEach(group => {
    let highestNum = group.reduce((prev, current) => Math.max(prev, current));
    largestNums.push(highestNum);
  });
  console.log(largestNums);
};

// // version: 3  | forEach loop, .sort()
const largestOfFour3 = (arr) => {
  let largestNums = [];
  arr.forEach(group => {
    let lastIndex = group.sort((prev, current) => prev - current);
    largestNums.push(lastIndex[lastIndex.length - 1]);
  });
  console.log(largestNums);
};

// version: 4  | for Each loop, Math.max(...) with spread operator
const largestOfFour4 = (arr) => {
  let largestNums = [];
  arr.forEach(group => {
    let highestNum = Math.max(...group);
    largestNums.push(highestNum);
  });
  console.log(largestNums);
};

// version: 5 | for of loop, Math.max(...) spread operator
const largestOfFour5 = arr => {
  let largestNums = [];
  for(let newArr of arr) {
    largestNums.push(Math.max(...newArr))
  }
  console.log(largestNums);
};


// version 1 doc tests
largestOfFour1([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// should return [5, 27, 39, 1001]

largestOfFour1([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// should return [27,5,39,1001]

largestOfFour1([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
// should return [9, 35, 97, 1000000]


// version 2 doc tests
largestOfFour2([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// should return [5, 27, 39, 1001]

largestOfFour2([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// should return [27,5,39,1001]

largestOfFour2([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
// should return [9, 35, 97, 1000000]


// version 3 doc tests
largestOfFour3([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// should return [5, 27, 39, 1001]

largestOfFour3([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// should return [27,5,39,1001]

largestOfFour3([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
// should return [9, 35, 97, 1000000]


// version 4 doc tests
largestOfFour4([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// should return [5, 27, 39, 1001]

largestOfFour4([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// should return [27,5,39,1001]

largestOfFour4([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
// should return [9, 35, 97, 1000000]

// version 5 doc tests
largestOfFour5([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// should return [5, 27, 39, 1001]

largestOfFour5([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// should return [27,5,39,1001]

largestOfFour5([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);


// explore:
// function largestOfFour(arr) {
//   return arr.map(function(group){
//     return group.reduce(function(prev, current) {
//       return (current > prev) ? current : prev;
//     });
//   });
// }
