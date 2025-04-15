console.log("In index.js")
// Group the anagrams
function groupAnagrams(strs) {
    // 1. Create a hash table to store anagram groups
    const anagramMap = new Map();
  
    // 2. Function to create a unique key for each anagram
    const sortString = (str) =>
      str
        .split('')
        .sort()
        .join(''); // Sort characters and join to create a unique key
  
    // 3. Group anagrams based on sorted key
    for (const str of strs) {
      const sortedKey = sortString(str);
      console.log("Sort String ",sortedKey)
      if (!anagramMap.has(sortedKey)) {
        console.log("Anagram Map ",anagramMap)
        anagramMap.set(sortedKey, []);  
      }
      anagramMap.get(sortedKey).push(str);
    }
  
    // 4. Convert Map to array of anagram groups
    return Array.from(anagramMap.values());
  }
  
  // Example usage
  const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
  const anagramGroups = groupAnagrams(strs);
  console.log(anagramGroups)


//   Reverse String 2

function reverseStr(s, k) {
    // Handle edge cases (empty string or k = 1)
    if (s.length === 0 || k === 1) return s;
  
    let reversedStr = "";
    for (let i = 0; i < s.length; i += 2 * k) {
      // Reverse the first k characters (or less if remaining)
      const chunk = s.substring(i, Math.min(i + k, s.length));
      console.log("chunk ", chunk)
      reversedStr += chunk.split("").reverse().join("");
  
      // Append any remaining characters without reversing
      if (i + k < s.length) {
        reversedStr += s.substring(i + k, i + 2 * k);
      }
    }
    return reversedStr;
  }
  
  // Example usage
  const str1 = "abcdefg";
  const str2 = "abcd";
  const k1 = 2;
  const k2 = 3;
  
  console.log(reverseStr(str1, k1)); // Output: "bacdfeg"
  console.log(reverseStr(str2, k2)); // Output: "cba"


//   Longest Common prefix

function longestCommonPrefix(strs) {
    // Handle edge cases (empty array or single string)
    if (strs.length === 0 || strs.length === 1) return strs[0] || "";
  
    // Find the shortest string in the array
    let shortestStr = strs[0];
    for (let str of strs) {
      if (str.length < shortestStr.length) {
        shortestStr = str;
      }
    }
    console.log("shortest str :",shortestStr)
  
    // Iterate through characters of the shortest string
    for (let i = 0; i < shortestStr.length; i++) {
      const char = shortestStr[i];
      console.log("char :",char)
      // Check if all strings share the current character at the same index
      for (let str of strs) {
        console.log("str :"+str[i] + " char :"+char);
        if (str[i] !== char) {
          return shortestStr.substring(0, i); // Return prefix up to the mismatch
        }
      }
    }
  
    // If loop completes, all characters match
    return shortestStr;
  }
  
  // Example usage
  const strs1 = ["flaower", "flaow", "flaight"];
  const strs2 = ["rdcog", "rdcacecar", "rdcar"];
  
  console.log(longestCommonPrefix(strs1)); // Output: "fl"
  console.log(longestCommonPrefix(strs2)); // Output: "" (no common prefix)
  
  
// write a program in JS for Palindrome Permutation
// ====================================================

function isPalindromePermutation(str) {
  // 1. Handle edge cases (empty string or single character)
  if (str.length <= 1) return true;

  // 2. Character frequency map
  const charCount = new Map();
  for (let char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // 3. Check for allowed odd frequencies
  let oddCount = 0;
  for (const count of charCount.values()) {
    if (count % 2 !== 0) {
      oddCount++;
      if (oddCount > 1) {
        return false; // More than one character with odd frequency
      }
    }
  }

  // 4. String can be rearranged to form a palindrome
  return true;
}

// Example usage
const str31 = "tactcoa";
const str32 = "aab";
const str33 = "carerac";

console.log(isPalindromePermutation(str31)); // Output: true (can be rearranged as "taco cat")
console.log(isPalindromePermutation(str32)); // Output: true (can be rearranged as "aba")
console.log(isPalindromePermutation(str33)); // Output: false (cannot be rearranged to a palindrome)

// 

function lengthOfLongestSubstring(s) {
  let n = s.length;
  let maxLength = 0;
  let start = 0;
  let charIndexMap = new Map();

  for (let end = 0; end < n; end++) {
      let currentChar = s[end];
      
      if (charIndexMap.has(currentChar)) {
          start = Math.max(charIndexMap.get(currentChar) + 1, start);
      }
      
      charIndexMap.set(currentChar, end);
      maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Example usage:
let input = "pwwkew";
console.log(lengthOfLongestSubstring(input)); // Output: 3 (The answer is "abc", with the length of 3)


// 
function restoreIpAddresses(s) {
  debugger
  const result = [];
  function backtrack(current, start, parts) { 
      if (parts === 4) {
          if (start === s.length) {
              result.push(current.join('.'));
          }
          return;
      }
      
      for (let len = 1; len <= 3; len++) {
          if (start + len > s.length) break;
          
          const segment = s.substring(start, start + len);
          if ((segment.length > 1 && segment.startsWith('0')) || parseInt(segment) > 255) continue;
          
          current.push(segment);
          console.log("current-push",current)
          backtrack(current, start + len, parts + 1);
          current.pop();
          console.log("current-pop",current)
      }

  }
  
  backtrack([], 0, 0);
  return result;
}

// Example usage:
const input1 = "25525511135";
const result = restoreIpAddresses(input1);
console.log(result); // ["255.255.11.135", "255.255.111.35"]


// 

function permute(arr) {
  let result = [];

  // Base case: if array length is 0, return an empty array
  if (arr.length === 0) return [[]];

  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
      // Extract the current element
      let current = arr[i];

      // Get the remaining elements after removing the current element
      let remaining = arr.slice(0, i).concat(arr.slice(i + 1));

      // Recursively get permutations of the remaining elements
      let remainingPerms = permute(remaining);

      // Combine the current element with each permutation of the remaining elements
      for (let perm of remainingPerms) {
          result.push([current].concat(perm));
      }
  }

  return result;
}

// Example usage
let arr = [1, 2];
let permutations = permute(arr);
console.log(permutations);


//

function getSubsets(array) {
  // Base case: return an array containing an empty array if the input array is empty
  if (array.length === 0) {
      return [[]];
  }

  // Recursively get all subsets of the array excluding the first element
  const firstElement = array[0];
  const restSubsets = getSubsets(array.slice(1));

  // For each subset found, create a new subset that includes the first element
  const subsetsWithFirst = restSubsets.map(subset => [firstElement, ...subset]);

  // Combine subsets with and without the first element and return
  return [...restSubsets, ...subsetsWithFirst];
}

// Example usage
const inputArray = [1, 2, 3];
const subsets = getSubsets(inputArray);
console.log(subsets);
