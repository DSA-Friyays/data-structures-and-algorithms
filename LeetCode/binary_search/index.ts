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

// Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

function getPrefixValue(currArr, index) {
  let value = 1;
  if (currArr.hasOwnProperty(index - 1)) {
    value = currArr[index - 1];
    return value;
  }
  return value;
}

function getPostfixValue(currArr, index) {
  let value = 1;
  if (currArr.hasOwnProperty(index + 1)) {
    value = currArr[index + 1];
    return value;
  }
  return value;
}

function generatePrefixArray(arr) {
  const prefixArray = new Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    const prefixValue = getPrefixValue(prefixArray, i);
    if (arr.hasOwnProperty(i - 1)) {
      prefixArray[i] = arr[i] * prefixValue;
    } else {
      prefixArray[i] = arr[i] * 1;
    }
  }
  return prefixArray;
}

function generatePostfixArray(arr) {
  const postfixArray = new Array(arr.length).fill(0);
  for (let i = arr.length - 1; i >= 0; i--) {
    const postfixValue = getPostfixValue(postfixArray, i);
    if (arr.hasOwnProperty(i + 1)) {
      postfixArray[i] = arr[i] * postfixValue;
    } else {
      postfixArray[i] = arr[i] * 1;
    }
  }
  return postfixArray;
}

function productExceptSelf(nums) {
  const prefix = generatePrefixArray(nums);
  console.log("prefix", prefix);
  const postfix = generatePostfixArray(nums);
  console.log("postfix", postfix);

  const output = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    const ithPrefix = getPrefixValue(prefix, i);
    const ithPostfix = getPostfixValue(postfix, i);
    output[i] = ithPrefix * ithPostfix;
  }
  console.log("output", output);
  return output;
}

// second solution

function productExceptSelf2(nums: number[]): number[] {
  let prefix = 1;
  let postfix = 1;
  const output = [];

  for (let i = 0; i < nums.length; i++) {
    output[i] = prefix;
    prefix *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= postfix;
    postfix *= nums[i];
  }

  return output;
}

//  Longest Consecutive Sequence

//  Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

//  You must write an algorithm that runs in O(n) time.

function longestConsecutive(nums: number[]): number {
  const setData = new Set(nums);
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    const preNum = nums[i] - 1;
    if (setData.has(preNum)) {
      continue;
    } else {
      let firstNum = nums[i];
      let count = 0;
      while (setData.has(firstNum)) {
        firstNum += 1;
        count++;
      }
      res = Math.max(res, count);
    }
  }
  return res;
}

// Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

function isPalindrome(s: string): boolean {
  let leftPnt = 0;
  let rightPnt = s.length - 1;

  const isAlphanumeric = (str: string) => {
    if ((str || " ").charCodeAt(0) >= 65 && (str || " ").charCodeAt(0) <= 90)
      return true;
    if ((str || " ").charCodeAt(0) >= 97 && (str || " ").charCodeAt(0) <= 122)
      return true;
    if ((str || " ").charCodeAt(0) >= 48 && (str || " ").charCodeAt(0) <= 57)
      return true;
  };
  // "A man, a plan, a canal: Panama"

  while (leftPnt < rightPnt) {
    while (!isAlphanumeric(s[leftPnt]) && leftPnt < rightPnt) {
      leftPnt++;
    }
    while (!isAlphanumeric(s[rightPnt]) && leftPnt < rightPnt) {
      rightPnt--;
    }
    if (s[leftPnt].toLowerCase() === s[rightPnt].toLowerCase()) {
      leftPnt++;
      rightPnt--;
    } else {
      return false;
    }
  }
  return true;
}

//  Search in Rotated Sorted Array

// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

function search(nums: number[], target: number): number {
  let leftPnt = 0;
  let rightPnt = nums.length - 1;

  while (leftPnt <= rightPnt) {
    const mid = Math.floor((leftPnt + rightPnt) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] >= nums[leftPnt]) {
      // the laughing emoji
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


 