function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    let left = 0;
    for(let searcher = 1; searcher < arr.length; searcher++) {
        if(arr[left] !== arr[searcher]) {
            left++;
            arr[left] = arr[searcher];
        }
    }
    // console.log(left + 1);
    return left + 1;
}

countUniqueValues([1,2,2,5,7,7,99]);
// 5
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);
// 7
countUniqueValues([]);
// 0
countUniqueValues([-2,-1,-1,0,1]);
// 4
