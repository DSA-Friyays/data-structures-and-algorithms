// Find Minimum in Rotated Sorted Array

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

function findMin(nums: number[]): number {
  let leftPnt = 0;
  let rightPnt = nums.length - 1;
  let result = Infinity;

  while (leftPnt < rightPnt) {
    const middle = Math.floor((leftPnt + rightPnt) / 2);
    result = Math.min(result, nums[middle]);
    if (nums[middle] > nums[rightPnt]) {
      leftPnt = middle + 1;
    } else {
      rightPnt = middle - 1;
    }
  }
  return Math.min(result, nums[leftPnt]);
}

// Search in Rotated Sorted Array

// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

function search(nums: number[], target: number): number {
  let leftPnt = 0;
  let rightPnt = nums.length - 1;

  while (leftPnt <= rightPnt) {
    const mid = Math.floor((leftPnt + leftPnt) / 2);
    // nums = [4,5,6,7,0,1,2], target = 7
    if (nums[mid] === target) {
      return mid;
    }

    // [4,5,6,7,0,1,2]
    //[4,5,6,7]
    // [0,1,2]

    // [4,5,6,7,0,1,2,3,4]
    //[0,1,2,3,4]

    // target = 0
    // im currently at the left
    if (nums[mid] >= nums[leftPnt]) {
      if (target > nums[mid] || target < nums[leftPnt]) {
        leftPnt = mid + 1;
      } else {
        rightPnt = mid - 1;
      }
    } else {
      if (target < nums[mid] || target > nums[rightPnt]) {
        rightPnt = mid - 1;
      } else {
        leftPnt = mid + 1;
      }
    }
  }

  return -1;
}
