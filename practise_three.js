function rotateDirect(ar,k){
    while(k>0){
        ar.unshift(ar.pop());
        k--;
    }
    return ar;
}

const arr1 = [1,2,3,4,5];
console.log(rotateDirect(arr1, 3));
console.log("Direct Rotation");

function rotateByCode(ar,k){
    let last  = ar.length-1;
    function rotate(ar, first, last){
        while(first<last){
            [ar[first],ar[last]] = [ar[last], ar[first]];
            first++;
            last--;
        }
    }

    rotate(ar, 0, last);
    rotate(ar,0,k-1);
    rotate(ar,k,last);
    return ar;
}

const arr2 = [1,2,3,4,5];
console.log(rotateByCode(arr2, 3));
console.log("Direct Rotation");

function secondLargestNum(ar){
    let largestNumber = ar[0];
    let secondLargest = -Infinity;

    for(let val of ar){
        if(val>largestNumber){
            secondLargest = largestNumber;
            largestNumber = val;
        }else if(val>secondLargest){
            secondLargest = val;
        }
    }
    return secondLargest;
}

const arr3=[1,2,67,99,91];
console.log(secondLargestNum(arr3));
console.log("Second Largest Number");

function removeDuplicate(ar){
    let k = 0;
    for(let i=0; i<ar.length; i++){
        if(ar[i] !== ar[k]){
            k++;
            ar[k]=ar[i];
        }
    }
    return k+1;
}

const arr4=[1,1,2,3,3,3,4,4,5,6,6,7];
const length = removeDuplicate(arr4);
console.log("No duplicate = ", arr4.slice(0,length))
console.log("Removing Duplicate Values");

function maxSubArr(ar){
    let maxSum = 0;
    let sum = 0;
    for(let val of ar){
        sum += val;
        if(sum>maxSum){
            maxSum=sum;
        }
        if(sum<0){
            sum=0;
        }
    }
    return maxSum
}

nums = [5,4,-1,7,8];
console.log(maxSubArr(nums));
console.log("Max Sub Array");

function twoSum(ar,t){
    let hash = {};
    let result = [];
    ar.forEach(element => {
        let remaining = t - element;
        if(hash[remaining]){
           result.push([remaining, element]); 
        }
            hash[element]=[element];  
    });
    return result;
}

const numVal = [3,5,2,-4,8,11];
const target = 7;
console.log(twoSum(numVal,target));
console.log("Two Sum");

function productSelf(ar){
    let n = ar.length
    let left = new Array(n);
    let right = new Array(n);
    let result = [];
    left[0] = 1;
    right[n-1] = 1;

    for(let i=1; i<n;i++){
        left[i] = left[i-1]*ar[i-1];
    }
    for(let i=n-2;i>=0;i--){
        right[i] = right[i+1]*ar[i+1];
    }
    for(let i=0;i<n;i++){
        result.push(left[i]*right[i]);
    }
    return result;
}

nums = [1,2,3,4]
console.log(productSelf(nums));
console.log("product of array except self");

function interval(ar){
    let sortedArr = ar.sort((a,b)=> a[0]-b[0]);
    let mergedResult = [sortedArr[0]];

    for(let i=0; i<ar.length;i++){
        let lastIndex = mergedResult.length -1;
        let lastVal = mergedResult[lastIndex][1];
        if(lastVal > ar[i][0]){
            mergedResult[lastIndex][1] = ar[i][1]> lastVal?ar[i][1]:lastVal
        }else{
            mergedResult.push(ar[i]);
        }
    }
    return mergedResult;
}

let intervals = [[9,20],[1,3],[2,6],[8,10],[15,18]]
console.log(interval(intervals));
console.log("Merge Intervals")

function missing(ar){
    let min = Math.min(...ar);
    let max = Math.max(...ar);
    let missing = [];
    let hashMap = new Set(ar);

    for(let i=min;i<max;i++){
        if(!hashMap.has(i)){
            missing.push(i);
        }
    }
    return missing
}

let num =[1,2,3,5,7,10];
console.log(missing(num));
console.log("Find missing number");

function combination(ar,t){
    let arrVal = [];
    function comb(index, ds, sum){
        if(sum===t){
            arrVal.push([...ds]);
            return;
        }
        if(index>=ar.length || sum > t){
            return;
        }
        ds.push(ar[index]);
        comb(index, ds, sum+ar[index]);
        ds.pop();
        comb(index+1, ds, sum);
    }
    comb(0,[],0);
    return arrVal;
}

let candidates = [2,3,6,7]; 
let targetVal = 7;
console.log(combination(candidates, targetVal));
console.log("Combination");
