### Coding Comparisons between Python and JavaScript

#### Code Challenge: *Find the Longest Word in a String

**Intructions:** *Return the length of the longest word in the provided sentence.*

*Your response should be a number.*

<hr>

#### Python 3.6 example


``` python

def find_longest_word(string: str) -> int:
    """
    Find the longest word from a sentence or string of words.
    :param string: str
    :return: int
    """
    # initialize longest_word variable
    longest_word = 1

    # split string by space character
    split_word = string.split(' ')

    # loop through list of string to compare which one is the largest,
    # then assign the the largest word to longest_word
    for word in split_word:
        if len(word) > longest_word:
            longest_word = len(word)
    return longest_word

```


#### JavaScript examples


#### JavaScript 6 example
```javascript
const findLongestWord2 = str => {
  // initialize longestWord variable
  let longestWord = 1;
  // split string by space character
  let splitString = str.split(' ');
  splitString.filter(function(word) {
    if(word.length > longestWord) {
      longestWord = word.length;
    }
  });
  console.log(`This is ES6--> ${longestWord}`);
  return longestWord;
};
```

#### JavaScript 5.1
```javascript
function findLongestWord(str) {
  // initialize longestWord variable
  var longestWord = 1;
  // split string by space character
  var splitString = str.split(' ');
  splitString.filter(function(word) {
    if(word.length > longestWord) {
      longestWord = word.length;
    }
  });
  console.log(`This is ES5--> ${longestWord}`);

  return longestWord;
}

```