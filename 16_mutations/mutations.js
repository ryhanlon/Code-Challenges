function mutation(arr) {

  const mutArr = arr;
  // change strings to lower case
  const changeCase = mutArr.map(word => word.toLowerCase());
  // compare if string-position 1 is in string-position 0
  let getMatch = changeCase[1];
  let compareTo = changeCase[0];

  const match = /getMatch/gi;

  return match.test(compareTo);
}

mutation(["hello", "hey"]);
