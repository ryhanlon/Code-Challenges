function same(arr1, arr2){
    // Edge case, make sure each array is the same length
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        // indexOf is a loop, so loop within loop
        // check if arr1[i] squared is in arr2
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        // if not in arr2, return false | end with no match
        if(correctIndex === -1) {
            return false;
        }
    // if in arr2, delete/splice out of arr1
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}

same([1,2,3,2], [9,1,4,4]);

