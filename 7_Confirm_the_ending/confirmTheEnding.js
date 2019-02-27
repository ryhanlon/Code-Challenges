//Basic Algorithm Scripting: Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).
// Do not use the built-in method .endsWith() to solve the challenge.

// confirm the ending
function confirmEnding(str, target) {
  // find length of target
  let ending = target.length;
  //splide the ending with target
  let endOfStr = str.slice(-ending);
  if(endOfStr === target) {
    return true;
  } else {
    return false;
  }
}

findLongestWord("The quick brown fox jumped over the lazy dog");
// should return 6.



confirmEnding("Bastian", "n");
// should return true.
confirmEnding("Congratulation", "on");
// should return true.
confirmEnding("Connor", "n");
// should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
// should return false.
confirmEnding("He has to give me a new name", "name");
// should return true.
confirmEnding("Open sesame", "same");
// should return true.
confirmEnding("Open sesame", "pen");
// should return false.
confirmEnding("Open sesame", "game");
// should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");
// should return false.
confirmEnding("Abstraction", "action");
// should return true.

