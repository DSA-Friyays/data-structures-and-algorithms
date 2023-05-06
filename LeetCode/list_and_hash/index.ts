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

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

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
