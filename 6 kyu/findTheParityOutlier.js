// create an "odds" array to hold all odd numbers
// create an "evens" array to hold all even numbers
// iterate through the every element in the array
// for every iteration: 
//    check if the number is even.
//    if so, add it to the evens array
//    otherwise, add it to the odds array
// for every iteration:
// check if: the current index is >= 3 & odds array is greater than 0 & evens array
//   is greater than 0
// return the first and only element in the evens array if the length of odds is
// greater than the evens array
// return the first and only element in the odds array otherwise.
function findOutlier(arr){
  const odds = [];
  const evens = [];
  for(let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? evens.push(arr[i]) : odds.push(arr[i]);
    if(i >= 2 && odds.length && evens.length) return evens.length > odds.length ? odds[0] : evens[0];
  }
}