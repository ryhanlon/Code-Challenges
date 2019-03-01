// Finders Keepers
// version 1
function findElement(arr, func) {
  let answer;

  for(let i = 0; i < arr.length; i += 1) {
    if(func(arr[i])){
      answer = arr[i];
      break;
    } else {
      answer =  undefined;
    }
  }
  return answer;
  }

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
// should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });
// should return undefined.
