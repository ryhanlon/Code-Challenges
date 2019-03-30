function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return console.log(arr.filter(Boolean));
}

// function bouncer(arr) {
// return console.log(arr.filter(value => value));
// }

// not working for NaN
// function bouncer(arr) {
// return console.log(arr.filter(value => value !== false && value !== "" && value !== null && value !== 0 && value !== isNaN(true) && value !== undefined));
// }

bouncer([7, "ate", "", false, 9]);
//should return [7, "ate", 9].

bouncer(["a", "b", "c"]);
//should return ["a", "b", "c"].

bouncer([false, null, 0, NaN, undefined, ""]);
//should return [].

bouncer([1, null, NaN, 2, undefined]);
//should return [1, 2].

