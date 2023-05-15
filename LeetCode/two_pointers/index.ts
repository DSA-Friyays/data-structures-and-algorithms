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
