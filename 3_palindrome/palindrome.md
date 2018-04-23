### Coding comparisons between Python and JavaScript

#### Check for Palindromes
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note:
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

Passed strings will have varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

Passed strings will also have special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".


<hr>

#### Python example
```python


```


#### JavaScript examples

#### JavaScript 6 example
```javascript
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
```


#### JavaScript 5.1 example
```javascript
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
```