console.log("practise 4");

// Direct Rotation

function rotateDirect(arr, k){
    while(k>0){
        arr.unshift(arr.pop());
        k--;
    }
    return arr;
}

const arr1 = [1,2,3,4,5];
console.log(rotateDirect(arr1, 3));
console.log("Direct Rotation");

// // Rotation By Code 

function rotateByCode(arr, k){
    const length = arr.length -1;
    let p = k%length;
    function rotate(arr, s, e){
        while(s<e){
            [arr[s],arr[e]]= [arr[e], arr[s]]
            s++;
            e--;
        }
        return arr;
    }
    rotate(arr,0, length);
    rotate(arr, 0, k);
    rotate(arr, k+1, length);
    return arr;
}

const arr2 = [1,2,3,4,5];
console.log(rotateByCode(arr2, 3));
console.log("Direct Rotation");

// // 2> Write program for second Largest number
function secondLargestNum(arr){
    let firstLargest = arr[0];
    let secondLargest = -Infinity;

    for(let num of arr){
        if(num > firstLargest){
            secondLargest = firstLargest;
            firstLargest = num;
        }else if(num<firstLargest && num>secondLargest){
            secondLargest = num;
        }
    }
    return secondLargest
}
const arr3=[1,2,67,99,91,97];
console.log(secondLargestNum(arr3));
console.log("Second Largest Number");

// // 3> Write program for remove duplicate from sorted array

function removeDuplicate(arr){
    let k = 0;
    for(let i=1; i<=arr.length-1; i++){
        if(arr[i] != arr[k]){
            k++;
            arr[k]=arr[i];
        }
    }
    return k+1;
}

const arr4=[1,1,2,3,3,3,4,4,5,6,6,7];
const length = removeDuplicate(arr4);
console.log("No duplicate = ", arr4.slice(0,length))
console.log("Removing Duplicate Values");

// // Max Sub Array
function maxSubArr(arr){
    let sum=0;
    let maxSum = 0;
    for (const ele of arr) {
        sum +=ele;
        if(sum>maxSum){
            maxSum = sum;
        }
        if(sum<0){
            sum=0;
        }
    }
    return maxSum   
}
const nums = [5,4,-1,7,8];
console.log(maxSubArr(nums));
console.log("Max Sub Array");

// // Two Sum

function twoSum(arr, t){
    let obj = {};
    let result = [];

    arr.forEach(ele => {
        let remaining = t - ele;
        if(obj[remaining]){
            result.push([remaining, ele]);
        }else{
            obj[ele]=ele;
        }
    });
    return result
}

const numVal = [3,5,2,-4,8,11];
const target = 7;
console.log(twoSum(numVal,target));
console.log("Two Sum");

// // product of array except self

function productSelf(arr){
    let n = arr.length;
    let left = new Array(n);
    let right = new Array(n);
    let result = [];

    left[0]=1;
    right[n-1]=1;

    for(let i =1; i<n; i++){
        left[i]=left[i-1]* arr[i-1];
    }

    for(let i =n-2;i>=0;i--){
        right[i]=right[i+1]*arr[i+1]
    }

    console.log(left);
    console.log(right);
    for(let i=0; i<arr.length; i++){
        result.push(left[i]*right[i]);
    }
    return result
}

const nums2 = [1,2,3,4]
console.log(productSelf(nums2));
console.log("product of array except self");

// // Merge Intervals

function interval(arr){
    let sortedArray = arr.sort((a,b)=>a[0]-b[0]);
    console.log(sortedArray)
    let mergedResult = [sortedArray[0]];
    for(let i=1; i<sortedArray.length; i++){
        let lastIndex = mergedResult.length-1;
        let lastVal = mergedResult[lastIndex][1];
        if(lastVal > sortedArray[i][0]){
            mergedResult[lastIndex][1] = sortedArray[i][1] > lastVal ? sortedArray[i][1] : lastVal
        }else{
            mergedResult.push(sortedArray[i]);
        }
    }
    return mergedResult;
}

let intervals = [[8,10],[9,20],[15,18],[1,3],[2,6],[21,22]]
console.log(interval(intervals));
console.log("Merge Intervals")

// // find missing number
function missing(arr){
    let first = Math.min(...arr);
    let last = Math.max(...arr);
    let missing = [];
    let hashMap = new Set(arr);
   for(let i = first; i<last;i++){
    if(!hashMap.has(i)){
        missing.push(i);
    }
   }

    return missing
}
let num =[1,2,3,5,7,10];
console.log(missing(num));
console.log("Find missing number");

// // Combination
// let candidates = [2,3,6,7]; 
// let targetVal = 7;
// console.log(combination(candidates, targetVal));
// console.log("Combination");

// // water tank

function waterTank(arr){
    let left = 0;
    let right = arr.length-1;
    let maxWater= 0;
    while(left < right){
        let water = Math.min(arr[left], arr[right])*(right-left);
        maxWater = Math.max(maxWater, water);
        if(arr[left]<arr[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxWater
}

let height = [1,8,6,2,5,4,8,3,7]
console.log(waterTank(height));
console.log("water tank");

// // buy and sell stocks

function buySell(arr){
    let maxProfit = 0;
    let minPrice = arr[0];
    for(let sell=0; sell<arr.length;sell++){
        let sellPrice = arr[sell];
        let profit = sellPrice - minPrice;
        maxProfit = Math.max(minPrice,profit);
        if(sellPrice<minPrice) minPrice = sellPrice
    }
    return maxProfit
}

let prices = [7,1,5,3,6,4];
console.log(buySell(prices));
console.log("Buy and sell stocks");