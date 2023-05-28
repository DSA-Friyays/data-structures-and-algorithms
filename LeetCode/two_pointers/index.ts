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

// Two Sum II - Input Array Is Sorted

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

function twoSum(numbers: number[], target: number): number[] {
  // []
  /// diff = target - num[i]
  // [2, 7, 11, 15]
  //    l.     r

  let leftPnt = 0;
  let rightPnt = numbers.length - 1;

  while (leftPnt <= rightPnt) {
    const desiredNum = numbers[rightPnt] + numbers[leftPnt];
    if (desiredNum < target) {
      leftPnt++;
    } else if (desiredNum > target) {
      rightPnt--;
    }
    if (desiredNum === target) {
      return [leftPnt + 1, rightPnt + 1];
    }
  }
}

function threeSum(nums: number[]): number[][] {
  const sortedNums = nums.sort((a, b) => a - b);
  let comArray = [];

  for (let i = 0; i < sortedNums.length; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue;
    }

    let leftPointer = i + 1;
    let rightPointer = sortedNums.length - 1;

    while (leftPointer < rightPointer) {
      const sum =
        sortedNums[i] + sortedNums[leftPointer] + sortedNums[rightPointer];
      if (sum === 0) {
        comArray.push([
          sortedNums[i],
          sortedNums[leftPointer],
          sortedNums[rightPointer],
        ]);
        rightPointer--;
        leftPointer++;
        while (
          leftPointer < rightPointer &&
          sortedNums[leftPointer] === sortedNums[leftPointer - 1]
        ) {
          leftPointer++;
        }
        while (
          leftPointer < rightPointer &&
          sortedNums[rightPointer] === sortedNums[rightPointer + 1]
        ) {
          rightPointer--;
        }
      } else if (sum < 0) {
        leftPointer++;
      } else {
        rightPointer--;
      }
    }
  }

  return comArray;
}

// 3Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

function threeSum(nums: number[]): number[][] {
  let outPutArray = [];
  let sortedNums = nums.sort((a, b) => a - b);
  // [-1,-1, 0, 2, 2, 4]
  for (let i = 0; i < sortedNums.length; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue;
    }
    // [-1,0,1,2,-1,-4]
    //.    r
    // [-1,-1, 0, 1, 2, 4]
    //    pl - l.     r + 0
    // [-1,-1, 0, 0, 1, 2, 4, 4]
    // i     lp  l.       r r - 1

    //  -1 0 4 = 0
    //  -1 0 4 = 0

    //        i + l + r = 0
    //         i + l + r > 0
    //          i + l + r < 0

    let leftPnt = i + 1;
    let rightPnt = sortedNums.length - 1;
    while (leftPnt < rightPnt) {
      const sum = sortedNums[i] + sortedNums[leftPnt] + sortedNums[rightPnt];

      if (sum === 0) {
        // please modify the output array first
        outPutArray.push([
          sortedNums[i],
          sortedNums[leftPnt],
          sortedNums[rightPnt],
        ]);
        leftPnt++;
        rightPnt--;
        while (
          leftPnt < rightPnt &&
          sortedNums[leftPnt] === sortedNums[leftPnt - 1]
        ) {
          leftPnt++;
        }
        while (
          leftPnt < rightPnt &&
          sortedNums[rightPnt] === sortedNums[rightPnt + 1]
        ) {
          rightPnt--;
        }
      } else if (sum < 0) {
        leftPnt++;
      } else {
        rightPnt--;
      }
    }
  }
  return outPutArray;
}

// Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

function maxArea(height: number[]): number {
  // o(n2)
  let maxArea = 0;
  let leftPnt = 0;
  let rightPnt = height.length - 1;

  while (leftPnt < rightPnt) {
    const diff = rightPnt - leftPnt;
    const minHeight = Math.min(height[leftPnt], height[rightPnt]);
    const currentArea = minHeight * diff;
    maxArea = Math.max(maxArea, currentArea);

    if (height[leftPnt] <= height[rightPnt]) {
      leftPnt++;
    } else {
      rightPnt--;
    }
  }
  return maxArea;
}

// Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function maxProfit(prices: number[]): number {
  let leftPnt = 0;
  let rightPnt = 0;
  let maxProfit = 0;
  while (rightPnt < prices.length) {
    const profit = prices[rightPnt] - prices[leftPnt];
    maxProfit = Math.max(maxProfit, profit);

    if (prices[rightPnt] < prices[leftPnt]) {
      leftPnt = rightPnt;
    }
    rightPnt++;
  }
  return maxProfit;
}

// Longest Substring Without Repeating Characters

function lengthOfLongestSubstring(s: string): number {
  let hashSet = new Set();
  let maxWindowSize = 0;
  let leftPointer = 0;

  for (let i = 0; i < s.length; i++) {
    while (hashSet.has(s[i])) {
      hashSet.delete(s[leftPointer]);
      leftPointer++;
    }
    hashSet.add(s[i]);
    maxWindowSize = Math.max(maxWindowSize, hashSet.size);
  }

  return maxWindowSize;
}

// Longest Repeating Character Replacement

function characterReplacement(s: string, k: number): number {
  let result = 0;
  let hashMap = {};
  let leftPnt = 0;

  for (let i = 0; i < s.length; i++) {
    // first hashMap gen
    if (hashMap[s[i]]) {
      hashMap[s[i]] += 1;
    } else {
      hashMap[s[i]] = 1;
    }
    // get the most freq element in the hasMap
    // @ts-ignore
    const mostFreq = Math.max(...Object.values(hashMap));

    while (i - leftPnt + 1 - mostFreq > k) {
      hashMap[s[leftPnt]] -= 1;
      leftPnt++;
    }

    result = Math.max(result, i - leftPnt + 1);
  }

  return result;
}
