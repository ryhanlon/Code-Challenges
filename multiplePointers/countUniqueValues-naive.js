function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

countUniqueValues([1,2,2,5,7,7,99]);
// 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);
// 7
countUniqueValues([]);
// 0
countUniqueValues([-2,-1,-1,0,1]);
// 4
