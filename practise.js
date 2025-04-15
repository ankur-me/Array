// 1> Write program for Rotate Arrsy by K
console.log("Normal rotation");
function rotateByCode(arr, k){
 
    while(k>0){
        arr.unshift(arr.pop());
        k--;
    }
    return arr;
}

    const arr1 = [1,2,3,4,5];
    console.log(rotateByCode(arr1, 3));

console.log("Rotation by code");

function rotateArr(arr, k){
    function rotate (arr, f,l){
        while(f<l){
            [arr[f],arr[l]]=[arr[l],arr[f]];
            f++;
            l--;
        }
        // return arr;
    }
    let length = arr.length;
    rotate(arr,0,length-1);
    rotate(arr,0, length-k-1);
    rotate(arr,k+1, length-1);
    return arr;
}

const arr2 = [1,2,3,4,5];
console.log(rotateArr(arr2, 3));
// // 2> Write program for second Largest number
console.log("Second Largest Number");

function secondLargestNum(arr){
    let largest = arr[0];
    let secLargest = -Infinity;
    debugger;
    // arr.forEach(element => {
    //     if(element>largest){
    //         secLargest = largest;
    //         largest = element;
    //     }
    //     if(element<largest && element>secLargest){
    //         secLargest = element;
    //     }
    // });
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secLargest = largest;
            largest = arr[i];
        }
        if(arr[i]<largest && arr[i]>secLargest){
            secLargest = arr[i];
        }
    }
    return secLargest;
}

const arr3 = [1,2,3,4,5,99, 98];
console.log(secondLargestNum(arr3));

// 3> Write program for remove duplicate from sorted array
console.log("Removing Duplicate Values");

function removeDuplicate(arr){
    if(arr.length==0)return;
    let val = 0;
    arr.forEach(element => {
        if(element != arr[val]){
            val++
            arr[val] = element;    
        }
    });
    return val+1;
}


let arr4 = [1,1,2,2,4,5,6,6,6,8,8,9,9];
let length = removeDuplicate(arr4);
console.log(`removed duplicate = ${arr4.slice(0,length)}`)

// Maximum Sub Array Sum
function maxSum(arr){
    let mSum=0;
    for(let i=0;i<arr.length;i++){
        let currentSum=0;
        for(let j=i+1;j<arr.length;j++){
            currentSum += arr[j];
            if(currentSum > mSum){
                mSum=currentSum;
            }
        }
    }
    return mSum;
}

let arr5 = [-2,1,-3,4,-1,2,1,-5,4];
console.log(`maximim sum subarray : ${maxSum(arr5)}`);

// kadane's Formula
function kadane(arr){
    let sum=0;
    let mSum=0;
    arr.forEach(element => {
        sum+=element;
        if(sum>mSum){
            mSum=sum;
        }
        if(sum<0){
            sum=0;
        }
    });
    return mSum;
}

let arr6 = [-2,1,-3,4,-1,2,1,-5,4,2

];
console.log(`maximim sum subarray kadane : ${kadane(arr6)}`);
// Two Sums
function twoSums(arr,s){
    let sumArr=[];
    let hash = {};
    arr.forEach((element,i) => {
        let remaining = s-arr[i];
        if(hash[remaining]){
            sumArr.push([element,remaining]);           
        }
        hash[element]=element;
    });
    return sumArr;
}

let arr7 = [3,5,2,-4,8,11];
let sum = 7;
console.log(twoSums(arr7,sum));

// product of array except self

function productOfArray(arr){
    let n = arr.length;
    let left = new Array(n);
    let right = new Array(n);
    let product = [];

    left[0]=1;
    right[n-1]=1;

    for(let i = 1; i < n; i++){
        left[i] = left[i-1]*arr[i-1];
    }

    for(let i=n-2;i>=0;i--){
        right[i]=right[i+1]*arr[i+1];
    }

    for(let i=0;i<n;i++){
        product[i]=left[i]*right[i];
    }

    return product;
}

let nums = [1,2,3,4]
console.log(productOfArray(nums));

// merge Intervals

function mergeIntervals(int){
    let sortArr = int.sort((a,b) => a[0]-b[0]);
    let n = sortArr.length;
    let merged = [sortArr[0]];
    for(let i =0; i<n;i++){
        let lastIndex = merged.length-1;
        let ValLastIndex = merged[lastIndex][1];

        if(ValLastIndex >=   sortArr[i][0]){
            merged[lastIndex][1] = sortArr[i][1] < ValLastIndex ? ValLastIndex : sortArr[i][1];
        }else{
            merged.push(sortArr[i]);
        }
    }
    return merged;
}

intervals = [[9,19],[8,10],[2,6],[1,3],[15,18],[25,27]]
  console.log(mergeIntervals(intervals));

// Finding Missing ELement

function findMissingNumber(arr){
    let missVal = [];
    let f = Math.min(...arr);
    let l = Math.max(...arr);
    let hashMap = new Set(arr);

    for(let i=f;i<l;i++){
     if(!hashMap.has(i)){
        missVal.push(i);
     }   
    }
    return missVal;
}

let nums1 = [1, 2, 4, 5, 6,8];
let missingNumber = findMissingNumber(nums1);
console.log(`Missing number: ${missingNumber}`);

// Tanks Water Problem

function maxArea(arr){
    let left =0;
    let right = arr.length-1;
    let maxWater=0;

    for(let i=0;i<arr.length;i++){
        let water = Math.min(arr[left],arr[right])*(right-left);
        maxWater = Math.max(water, maxWater);
        if(arr[left]<arr[right]){
            left++;
        }else{
            right--;
        }
    }

    return maxWater;

}

let tank = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(tank));

// selling and Buysing Stocks

function buyAndSell(arr){
    let maxProfit = 0;
    let minPrice = arr[0];
    for(let i=0;i<arr.length;i++){
        let sellPrice = arr[i];
        let profit = sellPrice-minPrice;
        maxProfit=Math.max(profit,maxProfit);
        if(sellPrice<minPrice) minPrice=sellPrice;
    }
    return maxProfit
}

let prices = [7,1,5,3,6,4]
console.log(`Max profit : ${buyAndSell(prices)}`);

// combination sum