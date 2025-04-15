// Finding Duplicate
let arr1=[1,3,5,2,3,5,9,4,4];
console.log(arr1.filter((cur,index,arr)=>arr.indexOf(cur)==index));

// Even Character
let arr2=[1,2,3,4,5];
console.log(arr2.filter(item => item%2==0))

// Check for Palindrome
let str1='madam';
console.log(checkPalindrome(str1));
function checkPalindrome(str){
    let lowerStr= str.toLowerCase();
    let revStr=[...lowerStr].reduce((acc, cur)=>cur+acc,'');
    return lowerStr===revStr
}

// get factorial of a number
let n=5
let arrTwo=Array.from({length:n},(_,i)=>i+1);
function factorial(n){
    if(n<0) return console.log('n! should not be -ve');
    if(n=0) return 1;
    return arrTwo.reduce((acc,curr) => curr*acc,1)
}
console.log(factorial(n));

// longest Word
function longestWord(str){
    let arr=str.split(' ');
    if(!arr) return '';
    const longestWord = arr.reduce((acc,curr)=> acc.length>curr.length ? acc : curr , '');
    return longestWord
}
 longestWord("Hi Iam Saikrishna Iam a UI Developer");

// biggest value
function biggestNo(arr){
    if(!arr.length) return '';
    const longestWord = arr.reduce((acc,curr)=> acc>curr? acc : curr , '');
    return longestWord
}
biggestNo([1, 6, -33, 9, 4, 8, 2]);

// reverse the entire string
const sentence = "ChatGPT is awesome"; // emosewa si TPGtahC
const reversedSentence = reverseWordsAndSentenceHigherOrder(sentence);
console.log(reversedSentence)
function reverseWordsAndSentenceHigherOrder(sentence){
    return sentence.split(' ')
            .map((item)=>item.split('').reverse().join(''))
            .reduce((acc,curr)=> curr+' '+acc,'')
};

// Smalled Value
const sentenceTwo = "Find the smallest word";
const smallest = findSmallestWord(sentenceTwo);
console.log(smallest)
function findSmallestWord(str){
    let arr = str.split(' ');
    return arr.reduce((acc, curr)=> acc.length<curr.length ? acc : curr, arr[0])
}