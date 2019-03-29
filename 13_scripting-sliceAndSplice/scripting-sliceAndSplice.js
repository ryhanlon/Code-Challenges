// scripting: slice and splice

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!

  let newArr = arr2.slice(0);
  for(let i = 0; i < arr1.length; i +=1) {
    newArr.splice(n, 0, arr1[i]);
    n += 1;
  }
  console.log(newArr);
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

