function findSubsets(nums) {
    // debugger;
    const subsets = [];
  
    function backtrack(index, currentSubset) {
      subsets.push([...currentSubset]);
  
      for (let i = index; i < nums.length; i++) {
        currentSubset.push(nums[i]);
        backtrack(i + 1, currentSubset);
        currentSubset.pop();
      }
    }
  
    backtrack(0, []);
    return subsets;
  }

  console.log(findSubsets([1,2,3]));

  // Product of Array Except Self

  function productOfArray(arr){
   let n = arr.length;
   let left = new Array(n);
   let right = new Array(n);
   let product = [];
   left[0]=1;
   right[n-1]=1;

   for(let i=1;i<n;i++){
    left[i]=left[i-1]*arr[i-1];
   }

   for(let i=n-2;i>=0;i--){
    right[i]=right[i+1]*arr[i+1];
   }

   for(let i =0; i<n;i++){
    product[i] = left[i]*right[i];
   }

   return product;

  }

  let nums = [1,2,3,4]
  console.log(productOfArray(nums));

  // Merge Intervals

  function mergeIntervals(Int){
    let sortInt = Int.sort((a,b)=>a[0]-b[0]);
      let merged = [sortInt[0]];
    for(let i=1; i<sortInt.length; i++){
      let lastIndex = merged.length-1;
      let lastElement = merged[lastIndex][1];
      if(lastElement>=sortInt[i][0]){
        merged[lastIndex][1] = lastElement>sortInt[i][1]? lastElement : sortInt[i][1];
      }else{
        merged.push(sortInt[i]);
      }
    }
    return merged;
  }

  intervals = [[9,19],[8,10],[2,6],[1,3],[15,18],[25,27]]
  console.log(mergeIntervals(intervals));

  console.log("Finding Missing Number");

  function findMissingNumber(nums) {
    let missingNum = [];
    const  missMap = new Set(nums);
    let start = Math.min(...nums);
    console.log(start);
    let last  = Math.max(...nums);
    console.log(last);

    for(let i=start; i<=last;i++){
      if(!missMap.has(i)){
        missingNum.push(i);
      }
    }

    return missingNum;
}

// Example usage
let nums1 = [1, 2, 4, 5, 6,8];
let missingNumber = findMissingNumber(nums1);
console.log(`Missing number: ${missingNumber}`);
