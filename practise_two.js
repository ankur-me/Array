console.log("Practise Two")
// Direct Rotation

function rotateDirect(arr,k){
    while(k>0){
        arr.unshift(arr.pop())
        k--;
    }
    return arr;
}

const arr1 = [1,2,3,4,5];
console.log(rotateDirect(arr1, 3));
console.log("Direct Rotation");

// Rotation By Code

function rotateByCode(arr,k){
    function rotate(arr, f,l){
        while(f<l){
            [arr[f], arr[l]] = [arr[l], arr[f]];
            f++;
            l--;
        }
        return arr;
    }
    let n = arr.length;
    rotate(arr, 0, n-1);
    rotate(arr, 0, n-k-1);
    rotate(arr,k+1,n-1)
    return arr;
}

const arr2 = [1,2,3,4,5];
console.log(rotateByCode(arr2, 3));
console.log("Direct Rotation");

// // 2> Write program for second Largest number

function secondLargestNum(arr){
    let largestNum = arr[0];
    let secondLargest = -Infinity;

    for(let i=0; i<arr.length; i++){
        if(arr[i]>largestNum){
            secondLargest = largestNum;
            largestNum = arr[i];
        }
        if(arr[i]<largestNum && arr[i]>secondLargest){
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

const arr3=[1,2,67,99,91];
console.log(secondLargestNum(arr3));
console.log("Second Largest Number");

// 3> Write program for remove duplicate from sorted array

function removeDuplicate(arr){
    let k=0;
    for(let i=1 ; i<arr.length; i++){
        if(arr[i]!=arr[k]){
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

// Max Sub Array
function maxSubArr(arr){
    let maxSum=0;
    let sum = 0;
    arr.forEach(element => {
        sum+=element;
        if(sum>maxSum){
            maxSum = sum;
        }
        if(sum<0){
            sum=0
        }
    });
    return maxSum;
}
// nums = [-2,1,-3,4,-1,2,1,-5,4];
nums = [5,4,-1,7,8];
console.log(maxSubArr(nums));
console.log("Max Sub Array");

// Two Sum

function twoSum(arr,t){
    let values = [];
    let hashMap = {};
    for(let i =0;i<arr.length;i++){
        let valLeft = t - arr[i];
        if(hashMap[valLeft]){
            values.push([valLeft, arr[i]]);
        }
        hashMap[arr[i]]=arr[i];
    }
    return values;
}

const numVal = [3,5,2,-4,8,11];
const target = 7;
console.log(twoSum(numVal,target));
console.log("Two Sum");

// product of array except self

function productSelf(arr){
    let n = arr.length;
    let left = new Array(n);
    let right = new Array(n);
    let product =[];

    left[0]=1;
    right[n-1]=1;

    for(let i=1;i<n;i++){
        left[i]=left[i-1]*arr[i-1];
    }
    for(let i=n-2;i>=0;i--){
        right[i]=right[i+1]*arr[i+1];
    }
    for(let i=0; i<n; i++){
        product[i]=left[i]*right[i];
    }
    return product;
}

nums = [1,2,3,4]
console.log(productSelf(nums));
console.log("product of array except self");

// Merge Intervals

function interval(arr){
    // let sortArr = arr.sort((a,b)=>a[0]-b[0]);
    let merged = [arr[0]];
    for(let i=0; i<arr.length; i++){
        let lastIndex = merged.length-1;
        let lastVal = merged[lastIndex][1];
        if(lastVal > arr[i][0]){
            merged[lastIndex][1] = arr[i][1]>lastVal ? arr[i][1] : lastVal;
        }else{
            merged.push(arr[i]);
        }   
    }
    return merged;
}

let intervals = [[1,3],[2,6],[8,10],[9,20],[15,18]]
console.log(interval(intervals));
console.log("Merge Intervals");

// find missing number

function missing(arr){
    let miss = [];
    let left = Math.min(...arr);
    let right = Math.max(...arr);
    let hashMap = new Set(arr);
    for(let i=left; i<right;i++){
        if(!hashMap.has(i)){
            miss.push(i);
        }
    }
    return miss;
}

let num =[1,2,3,5,7,10];
console.log(missing(num));
console.log("Find missing number");

// Combination
        
function combination(arr, t){
    let arrVal=[]
    function comb(index, ds, sum){
        if(sum === t){
            arrVal.push([...ds]);
            return;
        }
        if(index >= arr.length || sum > t){
            return;
        }
        ds.push(arr[index]);
        comb(index, ds, sum+arr[index]);
        
        ds.pop();
        comb(index+1,ds,sum);
    }
    comb(0,[],0);
    return arrVal;
}

// water tank

function waterTank(arr){
    let left = 0;
    let right = arr.length-1;
    let maxWater = 0;
    while(left<right){
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

height = [1,8,6,2,5,4,8,3,7]
console.log(waterTank(height));
console.log("water tank");

let candidates = [2,3,6,7]; 
let targetVal = 7;
console.log(combination(candidates, targetVal));
console.log("Combination");

// buy and sell stocks

function buySell(arr){
    let maxProfit = 0;
    let minPrice = arr[0];
    for(let sell=0; sell<arr.length; sell++){
        let sellPrice = arr[sell];
        let profit = sellPrice-minPrice;
        maxProfit = Math.max(minPrice, profit);
        if(sellPrice<minPrice) minPrice=sellPrice; 
    }
    return maxProfit;
}

prices = [7,1,5,3,6,4];
console.log(buySell(prices));
console.log("Buy and sell stocks"); 