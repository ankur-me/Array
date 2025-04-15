// Direct Rotation
const arr1 = [1,2,3,4,5];
console.log(rotateDirect(arr1, 3));
console.log("Direct Rotation");

// Rotation By Code 
const arr2 = [1,2,3,4,5];
console.log(rotateByCode(arr2, 3));
console.log("Direct Rotation");

// 2> Write program for second Largest number
const arr3=[1,2,67,99,91];
console.log(secondLargestNum(arr3));
console.log("Second Largest Number");

// 3> Write program for remove duplicate from sorted array
const arr4=[1,1,2,3,3,3,4,4,5,6,6,7];
const length = removeDuplicate(arr4);
console.log("No duplicate = ", arr4.slice(0,length))
console.log("Removing Duplicate Values");

// Max Sub Array
nums = [5,4,-1,7,8];
console.log(maxSubArr(nums));
console.log("Max Sub Array");

// Two Sum
const numVal = [3,5,2,-4,8,11];
const target = 7;
console.log(twoSum(numVal,target));
console.log("Two Sum");

// product of array except self
nums = [1,2,3,4]
console.log(productSelf(nums));
console.log("product of array except self");

// Merge Intervals
let intervals = [[1,3],[2,6],[8,10],[9,20],[15,18]]
console.log(interval(intervals));
console.log("Merge Intervals")

// find missing number
let num =[1,2,3,5,7,10];
console.log(missing(num));
console.log("Find missing number");

// Combination
let candidates = [2,3,6,7]; 
let targetVal = 7;
console.log(combination(candidates, targetVal));
console.log("Combination");

// water tank
height = [1,8,6,2,5,4,8,3,7]
console.log(waterTank(height));
console.log("water tank");

// buy and sell stocks
prices = [7,1,5,3,6,4];
console.log(buySell(prices));
console.log("Buy and sell stocks");

// Flatten an array
const nestedArray = [1, [2, [3, 4], [7,5]], 6];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); 