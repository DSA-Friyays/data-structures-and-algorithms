// Best Time to Buy and Sell Stock
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
