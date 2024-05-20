function hasTargetSum(array, target) {
  let sum = false
  for(let i = 0; i < array.length; i++){
      for(let j = i + 1; j < array.length; j++){
          if(array[i] + array[j] === target){
            sum = true
          }
      }
  }
  return sum
}

// Algo cycle:  11
/* 
  Write the Big O time complexity of your function here
  O(n^2) quadratic
*/

/* 
  Add your pseudocode here
  Write a nested loop:
    Outer loop:
      Takes nth element in the array, checks to make sure it is qual to or lower than target
    Inner loop:
      Takes the NEXT nth element in the array, checks to make sure it is qual to or lower than target
      Adds this number to the one from the outer loop
      Check if the sum is equal to our target
      Return true or false
*/

/*
  Add written explanation of your solution here
  Reminds me of the math game 24. We need to check the sum of every pair
  of numbers to see if it is equal to the target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10))
