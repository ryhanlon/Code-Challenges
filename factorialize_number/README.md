### Coding comparisons between Python and JavaScript

#### Factorialize a Number
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

<hr>

#### Python example
Used a *for loop* with the range function ```range(start, stop[,step])``` to generate a range of numbers, starting with 1 and ending with the argument + 1.
The second parameter in range() is exclusionary, so ```num + 1``` is used to include the arguement.  Then multiplied each number to the next number.

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

#### JavaScript examples
Used a *for loop*, ```for (statement 1; statement 2; statement 3)```.
+ **Statement 1** sets a variable before the loop starts ```(let i = 1)```
+ **Statement 2** defines the condition for the loop to run ```(i must be less then num)```
+ **Statement 3** increases a value ```(i++)``` each time the code block in the loop has been executed

Then multiplied the the integer in the factorial variable by *i*.
#### JavaScript 6 example
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
#### JavaScript 5.1 example
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

