/*---- Palendrome
Return true if the given string is a palindrome. Otherwise, return false.
----*/


function palindrome1(str) {

  // change letters to lowercase
  var lowerCaseWord = str.toLowerCase();
  // console.log(lowerCaseWord);

  // cleanout non-alphanumeric characters (spaces, symbols, punctuation)
  var pattern = /[\W\_]+/g;
  var forwardWord = lowerCaseWord.replace(pattern, '');
  console.log(forwardWord);

  // backwardWord = .split(), .reverse() .join()
  var backwardWord = forwardWord.split('').reverse().join('');
  console.log(backwardWord);

  // compare forwardWord and backwardWord
  if (forwardWord === backwardWord) {
    return true;
  } else {
   return false;
  }
 }

// doc tests
palindrome1("eye");
// should return true
palindrome1("_eye");
// should return true
palindrome1("race car");
// should return true
palindrome1("not a palindrome");
// should return false
palindrome1("A man, a plan, a canal. Panama");
// should return true
palindrome1("never odd or even");
// should return true
palindrome1("nope");
// should return false
palindrome1("almostomla");
// should return false
palindrome1("My age is 0, 0 si ega ym.");
// should return true
palindrome1("1 eye for of 1 eye.");
// should return false
palindrome1("0_0 (: /-\ :) 0-0");
// should return true
palindrome1("five|\_/|four");
// should return false


/*----- arrow function -----*/
const palindrome2 = str => {

  // change letters to lowercase
  let lowerCaseWord = str.toLowerCase();
  // console.log(lowerCaseWord);

  // cleanout non-alphanumeric characters (spaces, symbols, punctuation)
  let pattern = /[\W\_]+/g;
  let forwardWord = lowerCaseWord.replace(pattern, '');
  console.log(forwardWord);

  // backwardWord | reverse word
  let backwardWord = forwardWord.split('').reverse().join('');
  console.log(backwardWord);

  // compare forwardWord and backwardWord
  forwardWord === backwardWord ? console.log(true) : console.log(false);
  // if (forwardWord === backwardWord) {
  //   return true;
  // } else {
  //  return false;
  // }
 };

// doc tests
palindrome2("eye");
// should return true
palindrome2("_eye");
// should return true
palindrome2("race car");
// should return true
palindrome2("not a palindrome");
// should return false
palindrome2("A man, a plan, a canal. Panama");
// should return true
palindrome2("never odd or even");
// should return true
palindrome2("nope");
// should return false
palindrome2("almostomla");
// should return false
palindrome2("My age is 0, 0 si ega ym.");
// should return true
palindrome2("1 eye for of 1 eye.");
// should return false
palindrome2("0_0 (: /-\ :) 0-0");
// should return true
palindrome2("five|\_/|four");
// should return false