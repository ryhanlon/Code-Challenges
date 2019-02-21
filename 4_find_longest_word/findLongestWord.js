/*  Return the length of the longest word in the provided sentence.

Your response should be a number.  */

// break the string apart by space character
// loop through each string to get its length
// compare each string to find the longest
// return the int of the longest string

//========================
// function findLongestWord(str) {
//   // initialize longestWord variable
//   var longestWord = 1;
//   // split string by space character
//   var splitString = str.split(' ');
//   splitString.filter(function(word) {
//     if(word.length > longestWord) {
//       longestWord = word.length;
//     }
//   });
//   console.log(`This is ES5--> ${longestWord}`);
//
//   return longestWord;
// }


//==========================

/*----- arrow function -----*/
// const findLongestWord2 = str => {
//   // initialize longestWord variable
//   let longestWord = 1;
//   // split string by space character
//   let splitString = str.split(' ');
//   splitString.filter(function(word) {
//     if(word.length > longestWord) {
//       longestWord = word.length;
//     }
//   });
//   console.log(`This is ES6--> ${longestWord}`);
//   return longestWord;
// };


//============================
// with for of loop
// function findLongestWord(str) {
//   let words = str.split(" ");
//   let num = 1;
//   for(let word of words) {
//     let wordL = word.length;
//     if(wordL > num) {
//       num = (wordL);
//     }
//   }
//   console.log(num);
//   return num;
// }


//=================================
// with spread operator and Math.max()
// function findLongestWord(str) {
//   let words = str.split(" ");
//   let numArray = [];
//   for(let word of words) {
//     numArray.push(word.length);
//     }
//   console.log(numArray);
//   let longestNum = Math.max(...numArray);
//   console.log(longestNum);
//   return longestNum;
// }

findLongestWord("The quick brown fox jumped over the lazy dog");
// should return 6.
findLongestWord("May the force be with you");
//should return 5.
findLongestWord("Google do a barrel roll");
//should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow");
// should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology");
// should return 19.

findLongestWord2("The quick brown fox jumped over the lazy dog");
// should return 6.
findLongestWord2("May the force be with you");
//should return 5.
findLongestWord2("Google do a barrel roll");
//should return 6.
findLongestWord2("What is the average airspeed velocity of an unladen swallow");
// should return 8.
findLongestWord2("What if we try a super-long word such as otorhinolaryngology");
// should return 19.
