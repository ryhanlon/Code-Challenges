// Basic Algorithm Scripting: Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.


// code challenge 'repeat a string, repeat a string'

// version: 1  | for loop
function repeatStringNumTimes(str, num) {
  // repeat after me
  let newStr = "";
  for(let i = 1; i <= num; i +=1) {
    newStr += str;
  }
  return newStr;
}


// version: 2  | .repeat()
function repeatStringNumTimes1 (str, num) {
  // repeat after me
  let newStr = str.repeat(num);

  console.log(newStr);

  return newStr;
}


repeatStringNumTimes("*", 3);
// should return "***".
repeatStringNumTimes("abc", 3);
// should return "abcabcabc".
repeatStringNumTimes("abc", 4);
// should return "abcabcabcabc".
repeatStringNumTimes("abc", 1);
// should return "abc".
repeatStringNumTimes("*", 8);
// should return "********".
repeatStringNumTimes("abc", -2);
// should return "".

repeatStringNumTimes1("*", 3);
// should return "***".
repeatStringNumTimes1("abc", 3);
// should return "abcabcabc".
repeatStringNumTimes1("abc", 4);
// should return "abcabcabcabc".
repeatStringNumTimes1("abc", 1);
// should return "abc".
repeatStringNumTimes1("*", 8);
// should return "********".
repeatStringNumTimes1("abc", -2);
// should return "".
