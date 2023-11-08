const twoSum = (arr, target) => {

  if (arr.length === 0) return false

  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  const sortedArray = arr.sort((a, b) => a - b);
  while (leftPointer < rightPointer) {
    const sum = sortedArray[leftPointer] + sortedArray[rightPointer];
    if (sum === target) {//
      return true;
    }
    else if (sum < target) {
      leftPointer++;
    }
    else if (sum > target) {
      rightPointer--;
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

