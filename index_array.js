console.log("In DSA Array");

console.log("Rotate an array by K");

function rotateArray(nums, k) {

    function reverse(nums, start, end) {
        while (start < end) {
          [nums[start], nums[end]] = [nums[end], nums[start]];
          start++;
          end--;
        }
    }

    const n = nums.length;
    k %= n; 
    reverse(nums, 0, n - 1);
    // [7,6,5,4,3,2,1]
    reverse(nums, 0, n - k - 1);
    // [5,6,7,4,3,2,1]
    reverse(nums, n - k, n - 1);
    // [5,6,7,1,2,3,4]
  }
  
  const nums1 = [1, 2, 3, 4, 5, 6, 7];
  const k = 3;
  rotateArray(nums1, k);
  console.log(nums1); // Output: [5, 6, 7, 1, 2, 3, 4]

// Brute Force
function rotateArray(nums2, k){
    for (let i = 0; i < k; i++) {
        nums2.unshift(nums2.pop());
    }
    return nums2;
}
const nums2 = [2,3,4,5,6];
console.log(rotateArray(nums2, 3));
  
// using SPLICE

function rotate(arr, numberOfShifts) {
    let deletedArray = arr.splice(arr.length-numberOfShifts);
    console.log("deletedArray", deletedArray);
    // for (let i=0; i < deletedArray.length; i++){
    //     arr.splice(i,0,deletedArray[i]);
    // }
    // return arr;
};
const nums3=[9,8,7,6,5];
console.log("splice : ", nums3.splice(nums3.length-3))
// rotate([2,3,4,5,6],2);

// SECOND LARGEST ELEMENT
console.log("Second Largest ELement");
function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = -Infinity;
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] < largest && arr[i] > secondLargest) {
        secondLargest = arr[i];
      }
    }
    return secondLargest;
  }
  // Example usage:
  const array = [5, 2, 10, 8, 3];
  const secondLargest = findSecondLargest(array);
  console.log("Second largest element:", secondLargest);

// UNIQUE ELEMENTS
console.log("Remove duplicate elements from the sorted array");

function removeDuplicates(arr){
    if(arr.length===0){
        return 0;
    }
    
    let slow = 0;
    arr.forEach((element) => {
        if(arr[slow] !== element){
            slow++;
            arr[slow]=element;
            
        }
    });
    return slow+1;
}

const arr1 = [1, 1, 2, 2, 3, 4, 4, 5];
const length = removeDuplicates(arr1);
console.log("length = ", length)
console.log(arr1.slice(0, length));

// Maximum sub array

function maxSubArr(arr){
  let maxSum=arr[0];
 for(let i = 0; i<arr.length;i++){
  let currentSum = 0;
  for(let j=i+1;j<arr.length;j++){
    currentSum += arr[j];
    if(currentSum>maxSum){
      maxSum=currentSum;
    }
  }
 }
  return maxSum;
}

let arr2 = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArr(arr2)); 

// Kadane's Algorithm

function kadanesfn(arr){
  let sum = 0;
  let sumMax = arr[0];
  
  arr.forEach(element => {
    sum += element;
    if(sum> sumMax){
      sumMax=sum;
    }
    if(sum<0){
      sum=0;
    } 
  });
  return sumMax;
}

let arr3 = [-2,1,-3,4,-1,2,1,-5,4];
console.log(`Kadanes formula = ${kadanesfn(arr3)}`);

// Two Sum

function twoSum(arr4, Sum){
  let sums = [];
  let hashTable = {};
  arr4.forEach(element => {
    let sumMinusElement = Sum - element;
    if(hashTable[sumMinusElement]){
      sums.push([element, sumMinusElement]);
      console.log(sums);
    }
    hashTable[element]=element;
  });
  console.log(sums);
}

let arr4 = [3,5,2,-4,8,11];
let sum = 7;
console.log(`Two Sum = ${twoSum(arr4, sum)}`);

// Container with most water

function maxArea(arr){
  let left = 0;
  let right = arr.length-1;
  let maxWater = 0;

  while(left<right){
    const currentWater = Math.min(arr[left], arr[right])*(right-left);
    maxWater=Math.max(maxWater,currentWater);
    if(arr[left]<arr[right]){
      left++;
    }else{
      right--;
    }
  }
  return maxWater;
}

let arr5 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(arr5));

// Best Time to Buy and Sell stocks

function buyAndSell(prices){
  let maxProfit = 0;
  let minPrice = prices[0];
  for(let sell=1; sell<prices.length;sell++){
    let sellPrice=prices[sell];
    let profit = sellPrice-minPrice;
    maxProfit = Math.max(profit, maxProfit);
    if(sellPrice<minPrice)minPrice=sellPrice
  }
  return maxProfit
}

let prices = [7,1,5,3,6,4]
console.log(`Max profit : ${buyAndSell(prices)}`);

// combination sum

function combinationSum(candidates, target) {
  let result = [];

  function findCombination(index, dataStructure, sum){
    if(sum===target){
      result.push([...dataStructure]);
      return;
    }
    if(sum>target || index>=candidates.length){
      return;
    }

    dataStructure.push(candidates[index]);

    findCombination(index, dataStructure,sum+candidates[index]);
    dataStructure.pop();
    findCombination(index+1,dataStructure,sum)

  }

  findCombination(0,[],0);
  return result
}

let candidates = [2,3,5];
let target = 8;
let combinations = combinationSum(candidates, target);
console.log("Combinations that sum to target:");
console.log(combinations);

