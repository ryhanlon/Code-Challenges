### Notes for Multiple Pointers


#### Summary
1. _Multiple Pointers_: Creates pointers or values that correspond to an index or position and moves towards the beginning, end or middle based on a certain condition
2. Naive Solution uses nested loops- 
    - Time Complexity -  O(N<sup>2</sup>) | O(N^2)
    - Space Complexity - O(1)
3. Refactored Solution uses multiple pointers-
    - Time Complexity O(N)
    - Space Complexity O(1)
4. Very efficient for solving problems with minimal space complexity 

#### Times to Use Multiple Pointers

* linear structure, like an array or string, singly linked list or doubly linked list
* search for a pair of values or meets a condition
* uses two references (each a variable, i ot j, for indices): 
    - one reference at beginning and one at the end and  work towards the middle 
    - side by side
    - work towards each other, start at begining or end, but must use two pointers


#### Example Problems

##### sumZero sample
+ Write a function called `sumZero` , which accepts a sorted array. The function should find the first pair where the sum is 0.  Return an array that includes both values that sum to zero or undefined if pair does not exist

`sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]`  
`sumZero([-2, 0, 1, 3]) // undefined`  
`sumZero([1, 2, 3]) // undefined`

See `sum-zero-naive.js` [sample file](sum-zero-naive.js)  
&  `sum-zero-refactored.js` [sample file](sum-zero-refactored.js)


##### countUniqueValues sample
+ Implement a function called `countUniqueValues`, which accepts a sored array, and counts the unique values in teh array.  There can be negative numbers in the array, but the array will always be sorted.

`countUniqueValues([1,2,2,5,7,7,99]);  // 5`  
`countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);  // 7`  
`countUniqueValues([]);  // 0`  
`countUniqueValues([-2,-1,-1,0,1]);  // 4`   

See `countUniqueValues-naive.js` [sample file](countUniqueValues-naive.js)    
& `countUniqueValues-refactored.js` [sample file](countUniqueValues-refactored.js)

