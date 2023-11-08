const twoSum = (arr, target) => { 
  const cache = {}
  // Count how many times each number appears and store it in cache.
  for(let num of arr){
    if(!cache[num]) cache[num] = 1;
    else cache[num]++;
  }
  for(let num of arr){
    if(cache[target-num]){
      if(target-num === num){
        // Check if there is more than one element with value num.
        if(cache[target-num] > 1) return true
        else continue;
      }
      else return true;
    }
  }
  return false;
}
let result = "";
const arr1 = [1, 4, 6, 12, 9];
result = result.concat(twoSum(arr1, 10));
result = result.concat(',');
const arr2 = [1, 4, 6, 12, 9];
result = result.concat(twoSum(arr2, 16));
result = result.concat(',')
const arr3 = [1, 4, 7, 2, 9, 0];
result = result.concat(twoSum(arr3, 7));
console.log(result);

