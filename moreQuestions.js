// Here are 10 array-related questions (easy to medium level) that are commonly asked in front-end development interviews, often focusing on problem-solving skills and understanding of fundamental algorithms:

// ### Easy Level

// 1. **Find the Maximum Element in an Array**
//    - **Problem:** Given an array of integers, find the maximum element in the array.
//    - **Example:**  
//      Input: `[1, 3, 5, 2, 4]`  
//      Output: `5`

// 2. **Find the Minimum Element in an Array**
//    - **Problem:** Given an array of integers, find the minimum element in the array.
//    - **Example:**  
//      Input: `[4, 2, 9, 1, 7]`  
//      Output: `1`

// 3. **Check if Array is Sorted**
//    - **Problem:** Given an array of integers, check if it is sorted in non-decreasing order.
//    - **Example:**  
//      Input: `[1, 2, 2, 3, 4]`  
//      Output: `true`

// 4. **Reverse an Array**
//    - **Problem:** Reverse the given array.
//    - **Example:**  
//      Input: `[1, 2, 3, 4, 5]`  
//      Output: `[5, 4, 3, 2, 1]`

// 5. **Find the Sum of Elements in an Array**
//    - **Problem:** Given an array of integers, find the sum of all its elements.
//    - **Example:**  
//      Input: `[1, 2, 3, 4]`  
//      Output: `10`

// ### Medium Level

// 6. **Move All Zeros to the End**
//    - **Problem:** Given an array, move all the zeros to the end of the array without changing the relative order of the non-zero elements.
//    - **Example:**  
//      Input: `[0, 1, 0, 3, 12]`  
//      Output: `[1, 3, 12, 0, 0]`

// 7. **Find the Duplicates in an Array**
//    - **Problem:** Given an array, find all the duplicate elements.
//    - **Example:**  
//      Input: `[1, 2, 3, 2, 3, 4]`  
//      Output: `[2, 3]`

// 8. **Find the Majority Element (Element Occurs More Than n/2 Times)**
//    - **Problem:** Find the element that appears more than n/2 times in the array, where n is the size of the array.
//    - **Example:**  
//      Input: `[3, 3, 4, 2, 4, 4, 2, 4, 4]`  
//      Output: `4`  
//      Explanation: `4` appears more than 4 times.

// 9. **Rotate an Array by K Elements**
//    - **Problem:** Given an array and an integer `k`, rotate the array to the right by `k` steps.
//    - **Example:**  
//      Input: `arr = [1, 2, 3, 4, 5, 6, 7], k = 3`  
//      Output: `[5, 6, 7, 1, 2, 3, 4]`

// 10. **Find the Intersection of Two Arrays**
//     - **Problem:** Given two arrays, find the intersection (elements that appear in both arrays).
//     - **Example:**  
//       Input: `arr1 = [1, 2, 2, 1]`, `arr2 = [2, 2]`  
//       Output: `[2, 2]`

// ### Key Concepts Tested:
// - Array manipulation (reversal, rotation)
// - Searching and sorting (finding max/min)
// - Handling duplicates and zeros
// - Working with elements' frequency or majority
// - Understanding array intersections and sums



// function moveZerosToEndInPlace(arr) {
//     let nonZeroIndex = 0; // Tracks where the next non-zero element should go
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] !== 0) {
//         arr[nonZeroIndex] = arr[i]; // Move non-zero element
//         nonZeroIndex++;
//       }
//     }
  
//     // Fill the remaining positions with zeros
//     for (let i = nonZeroIndex; i < arr.length; i++) {
//       arr[i] = 0;
//     }
  
//     return arr; // Return the modified array (optional)
//   }
  
// ===========================================

// Create a function which will accepts two arrays arr1 and 
// arr2. The function should return true if every value in arr1 has 
// its corresponding value squared in array2. The frequency of 
// values must be same. 
// Inputs and outputs:
//  =============
//  1,2,3,4,1,9  true
//  1,2,3,1,9  false

// ===========================================

// Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. 
// Merge them and sort [0,3,4,4,6,30,31] ?

// ===========================================

// Find the max count of consecutive 1ʼs in an array 
// findConsecutive([1, 1, 9, 1, 9, 19, 7, 1, 1, 1, 2, 5, 1]);
// output: 3

// ============================================

// Write a JavaScript function that returns the Fibonacci 
// sequence up to a given number of terms. 

// ===============================================

// Write a function sumOfThirds(arr), which takes an 
// array arr as an argument. This function should return a sum of 
// every third number in the array, starting from the first one.