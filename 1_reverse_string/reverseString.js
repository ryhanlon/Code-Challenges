

"use strict";

// function reverseString(str) {
//   // split string, reverse array, join array into string
//   let splitString = str.split('').reverse().join('');
//
//   // console.log(splitString);
//   return splitString;
//
// }

const reverseString = str => {
    // split string, reverse array, join array into string
  let splitString = str.split('').reverse().join('');

  // console.log(splitString);
  return splitString;

};

reverseString("hello");
// should return "olleh"

reverseString("Howdy");
// should return  "ydwoH"

reverseString("Greetings from Earth")
// should return "htraE morf sgniteerG"
