// O(N)

function same(arr1, arr2){
    // Edge case, make sure that the length of each array equals
    if(arr1.length !== arr2.length){
        return false;
    }
    //
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    // separate each value to a key and count how many times for each value
    for(let val of arr1){
        // frequencyCounter1[val] ? frequencyCounter1[val] += 1 : frequencyCounter1[val] = 1;
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    // separate each value to a key and count how many times for each value
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for(let key in frequencyCounter1){
        // Check keys: if key in fc1 squared is not in fc2, return false
        if(!(key ** 2 in frequencyCounter2)) {
            return false
        }
        // Check values: if values in each fc2 key are not equal to the
        // the values in each fc1 key, return false
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11]);
