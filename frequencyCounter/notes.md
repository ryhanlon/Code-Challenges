### Notes for Frequency Counter


#### Summary
1. _Frequency Counters_ uses objects or sets to collect values/frequencies of values
2. This can often avoid the need for nested loops or O(N<sup>2</sup>) | O(N^2) operations with arrays / strings
3. Ususally O(N)
4. Useful when there are multiple inputs or multiple pieces of data and you need to compare them to see if they consist of similar values. 

#### Times to Use Frequency Counters

* anagrams of one another
* a value is contained inside of an other value


#### Example Problems

+ Write a function called `same` , which accepts two arrays. The function should return true if every value in the has it's corresponding value squared in the second array. The frequency of values must be the same.

`same([1, 2, 3], [4, 1, 9]) // true`  
`same([1, 2, 3], [1, 9]) // false`  
`same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)`

See `same-naive-solution.js` [sample file](same-naive-solution.js)  
&  `same-refactored-solution.js` [sample file](same-refactored-solution.js)
