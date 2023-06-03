//  Contains Duplicate
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

//  Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const sortFnc = (str: string) =>
    str
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");

  const sortedS = sortFnc(s);
  const sortedT = sortFnc(t);

  if (sortedS === sortedT) {
    return true;
  }

  return false;
}

// Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
function twoSum(nums: number[], target: number): number[] {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (hashMap[diff] !== undefined) {
      return [hashMap[diff], i];
    } else {
      hashMap[nums[i]] = i;
    }
  }
}

// Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
function groupAnagrams(strs: string[]): string[][] {
  const hashMap = {};

  const sortFunc = (str: string) =>
    str
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");

  for (let orginalWord of strs) {
    const sortedWord = sortFunc(orginalWord);
    if (hashMap[sortedWord] !== undefined) {
      hashMap[sortedWord].push(orginalWord);
    } else {
      hashMap[sortedWord] = [orginalWord];
    }
  }
  return Object.values(hashMap);
}

// Top K Frequent Elements
function topKFrequent(nums: number[], k: number): number[] {
  const hashMap = {};
  const freq = new Array(nums.length + 1).fill(0).map(() => []);
  const returnValue = new Set();

  for (const num of nums) {
    if (hashMap[num] !== undefined) {
      hashMap[num]++;
    } else {
      hashMap[num] = 1;
    }

    freq[hashMap[num]].push(num);
  }

  // map {
  //   '4' : 5
  //   '1' : 9
  //   '3' : 3
  //.  '7' : 9
  // }

  // freq = [[],[],[],[3],[4],[],[1, 7]]

  for (let i = freq.length - 1; i > 0; i--) {
    if (returnValue.size === k) {
      break;
    }

    if (freq[i].length > 0) {
      for (const freqItem of freq[i]) {
        returnValue.add(freqItem);
      }
    }
  }

  return Array.from(returnValue) as number[];
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
