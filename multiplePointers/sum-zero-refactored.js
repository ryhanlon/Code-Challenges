function sumZero(arr) {
	// left or beginning of array, 0 index
	let left = 0;
	// right or end of array
	let right = arr.length - 1;
	// with sorted array, beginning/left is less than the end/right
	// fail safe to keep from false neg (0-0)
	while(left < right) {
		// variable holds the sum of the two numbers at pointer indices
		let sum = arr[left] + arr[right];
		// compares if meets condition
		if(sum === 0) {
			return [arr[left], arr[right]];
		} else if(sum > 0) {
			// if the sum is greater than 0, move towards the beginning by one
			right--;
		} else {
			// if the sum is less than 0, move towards the end by one
			left++;
		}
	}
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]);
// [-3, 3]
sumZero([-2, 0, 1, 3]);
// undefined
sumZero([1, 2, 3]);
// undefined
