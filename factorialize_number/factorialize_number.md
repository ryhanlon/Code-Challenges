### Coding comparisons between Python and Javascript

#### Factorialize a Number
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

<hr>

#### Python example
```python


def factorialize(num: int) -> int:
    """
    Factorialize a number.
    :param num: int
    :return: int
    """
    factorial = 1
    for n in range(1, num + 1):
        factorial *= n
    print(factorial)

```

#### JavaScript5 example
```javascript


function factorialize(num) {
  var factorial = 1;
  for (let i = 1; i <= num; i++ ) {
  factorial *=  i;
  }
  console.log(factorial);
  return factorial;
}

```

#### JavaScript6 example
```javascript


const factorialize = num => {
  let factorial = 1;
  for (let i = 1; i <= num; i++ ) {
  factorial *=  i;
  }
  console.log(factorial);
  return factorial;
}

```