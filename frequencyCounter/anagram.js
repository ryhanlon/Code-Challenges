// used for multiple pieces of data and you need to compare them--
// especially if they consists of the same individual pieces
// anagrams, number to number squared, numbers consist of the same digits but in different order,


function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')
// true
validAnagram('aaz', 'azz')
// false
validAnagram('rat', 'car')
// false
validAnagram('awesome', 'awesom');
// false
validAnagram('qwerty', 'qeywrt');
// true
validAnagram('texttwisttime', 'timetwisttext');
// true
validAnagram('', '');
// true