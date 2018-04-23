/*===  Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".  ===*/

"use strict";

/*--- JavaScript 5.1 ---*/

function titleCase(str) {
  // clean the string by changing all letters to lowercase
  // and splitting into an array
  var wordList = [];
  var clean_string = str.toLowerCase().split(' ');

  // iterate through array
  clean_string.map(function(word) {
    // change first letter to capital
    var titleLetter = word[0].toUpperCase();
    // capitalize first letter and concat with rest of sliced word
    var titleWord = titleLetter + word.slice(1);
    // add capitalized word to array
    wordList.push(titleWord);
  });
  // join word into finalSent array
    var finalSent = wordList.join(' ');
    console.log(finalSent);
    return finalSent;
}


titleCase("I'm a little tea pot");
// should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt");
// should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
// should return "Here Is My Handle Here Is My Spout".


/*--- JavaScript 6 ---*/

const titleCase2 = str => {
  // clean the string by changing all letters to lowercase
  // and splitting into an array
  let wordList = [];
  const clean_string = str.toLowerCase().split(' ');

  // iterate through array
  clean_string.map(function(word) {
    // change first letter to capital
    let titleLetter = word[0].toUpperCase();
    // capitalize first letter and concat with rest of sliced word
    let titleWord = titleLetter + word.slice(1);
    // add capitalized word to array
    wordList.push(titleWord);
  });
  // join word into finalSent array
    const finalSent = wordList.join(' ');
    console.log(finalSent);
    return finalSent;
};

titleCase2("I'm a little tea pot");
// should return "I'm A Little Tea Pot".
titleCase2("sHoRt AnD sToUt");
// should return "Short And Stout".
titleCase2("HERE IS MY HANDLE HERE IS MY SPOUT");
// should return "Here Is My Handle Here Is My Spout".

/* variation using .charAt() */

const titleCase3 = str => {
  // clean the string by changing all letters to lowercase
  // and splitting into an array
  let wordList = [];
  const clean_string = str.toLowerCase().split(' ');

  // iterate through array
  clean_string.map(function(word) {
    // change first letter to capital
    let titleLetter = word.charAt().toUpperCase();
    // capitalize first letter and concat with rest of sliced word
    let titleWord = titleLetter + word.slice(1);
    // add capitalized word to array
    wordList.push(titleWord);
  });
  // join word into finalSent array
    const finalSent = wordList.join(' ');
    console.log(finalSent);
    return finalSent;
};


// note: string.charAt(index)
// var str = "HELLO WORLD";
// var res = str.charAt(str.length-1);
// returns the last letter, D


titleCase3("I'm a little tea pot");
// should return "I'm A Little Tea Pot".
titleCase3("sHoRt AnD sToUt");
// should return "Short And Stout".
titleCase3("HERE IS MY HANDLE HERE IS MY SPOUT");
// should return "Here Is My Handle Here Is My Spout".