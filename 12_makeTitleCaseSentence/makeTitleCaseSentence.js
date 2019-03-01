// title case a sentense
function titleCase(str) {
  let cleanStr = str.toLowerCase().split(" ");
  let titleWord = [];
  let sentense;
  cleanStr.map(word => {
    let titleLetter = word.charAt(0).toUpperCase() + word.slice(1);
    titleWord.push(titleLetter);
  })
  sentense = titleWord.join(" ");
  console.log(sentense);
  return sentense;
}

titleCase("I'm a little tea pot");
//should return a string.
titleCase("I'm a little tea pot");
//should return I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt");
//should return Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
//should return Here Is My Handle Here Is My Spout.
