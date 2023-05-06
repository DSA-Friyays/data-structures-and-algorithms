// 217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.
// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

function containsDuplicate(nums: number[]): boolean {
  const hashMap = {};

  for (let numbers of nums) {
    if (hashMap[numbers]) {
      return true;
    } else {
      hashMap[numbers] = 1;
    }
  }

  return false;
}
