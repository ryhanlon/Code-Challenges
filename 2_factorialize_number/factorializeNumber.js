/*--- Code Challenge: Factorialize a number ---*/


// function factorialize(num) {
//   "use strict";
//   var factorial = 1;
//   for (let i = 1; i <= num; i++ ) {
//   factorial *=  i;
//   }
//   console.log(factorial);
//   return factorial;
// }

const factorialize2 = num => {
  let factorial = 1;
  for (let i = 1; i <= num; i++ ) {
  factorial *=  i;
  }
  console.log(factorial);
  return factorial;
};

// recursion
// const factorialize = num => {
//   // termination
//   if(num < 0) return;

//   // base
//   if(num === 0) return 1;

//   // recursion
//   return num * factorialize(num - 1);
// }



// factorialize(5);
// // should return 120
//
// factorialize(10);
// // should return 3628800
//
// factorialize(20);
// // should return 2432902008176640000

factorialize2(5);
// should return 120

factorialize2(10);
// should return 3628800

factorialize2(20);
// should return 2432902008176640000
