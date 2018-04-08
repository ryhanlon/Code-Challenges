### Coding Comparisons between Python and Javascript

#### Code Challage: *Reverse a String*

**Intructions:** *Reverse the provided string.*

*Your result must be a string.*

<hr>

#### Python 3.6 example
In Python I used the slice syntax to reverse a string.  Slice syntax accepts three arguments: _start_, _stop_, _step_.  If a positive number is indicated in the _step_ argument the string or list will be traversed from beginning to end, starting at index 0.  If a negitive number is indicated, such as -1, then the list or string will be traversed from the end to the 0 index.
###### Notes:
1. Strings are immutable so I assigned the new string to the variable *reversed_str*.

```python

def reverse_string(string: str) -> str:
    """
    Function accepts a string and reverses it.
    :param str: string
    :return: string
    """

    reversed_str = string[::-1]
    return reversed_str

```

#### JavaScript 6 example
In JavaScript I used an _arrow function_.
```javascript
const reverseString = str => {
    // split string, reverse array, join array into string
  let splitString = str.split('').reverse().join('');

  // console.log(splitString);
  return splitString;

};
```