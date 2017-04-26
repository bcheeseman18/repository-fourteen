// 1. Write an avg function that accepts an array 
//  of numbers and returns the average.

let sum = [3, 7, 12, 4].reduce(function(acc, val) {
    return acc + val / 4; 
}, 0); 

console.log(sum); 

// 2. Write an containsVowels function that accepts a string 
//and returns true if any of them are vowels and false otherwise.

// let str = 'you big elephant'; 

// function containsVowels(string) {
    
//     function split(words) {
//         return words.split(''); 
//     } 

//     function vowels(letters) {
//         if (letters === 'a' || letters === 'e' || letters === 'i' || letters === 'o' || letters === 'u') {
//         return true; 
//         } else {
//             return false;
//         }
//     }
//     return split(string).filter(vowels).length > 0; 
// }
// console.log(containsVowels(str)); 
        
// 3. Write a piglatin function that accepts a string and returns the piglatin version of that string. 
//"This is an example of piglatin" becomes "hisTay siay naay xampleeay foay iglatinpay".

// let str = "This is an example of piglatin"; 

// function piglatin(phrase) {
//     let words = phrase.split(' ');
//     let newWords = words.map(function(word) {
//         console.log('word = ' + word);     
//         let first = word.substring(0,1); 
//         let rest = word.substring(1); 
//         let newWord = rest + first + 'ay'; 
//         return newWord;  
//     });
//     return newWords.join(' '); 
// }
// console.log(piglatin(str)); 

//4. Write a longestWord function that accepts a string and returns the longest word from the string.

// let str = 'what is the biggest word?';

// function longestWord(first, second) {
//     console.log("first: " + first + ", second: " + second);
//     if (first.length > second.length) {
//         return first;
//     } else {
//         return second; 
//     }
// }
// let words = str.split(' ');
// console.log("words: " + words);
// let longest = words.reduce(longestWord, ""); 
// console.log('longest = ' + longest);  

//5. Write a multiples function that accepts two numbers and returns 
//an array of numbers from 1 - 100 that are evenly divisible by both. 
//For this exercise you can use the following helper function:

// function range(min, max) {
//   let nums = [];

//   for (let i = min; i <= max; i++) {
//     nums.push(i);
//   }

//   return nums;
// }

// function isEvenlyDivisible(num, divisor) {
//     if( num % divisor )
//         return false;
//     return true;
// }
 
// function filterEvenDivisible(num, v1, v2) {
//     if (isEvenlyDivisible(num, v1) && isEvenlyDivisible(num, v2))
//         return true;
//     return false;
// }

// function multiples(v1, v2) {
//     let rng = range(1, 100);
//     // return rng.filter(function(num) {
//     //     filterEvenDivisible(num, v1, v2);
//     // })
//     let result = rng.filter(function(num) {
//         if (isEvenlyDivisible(num, v1) && isEvenlyDivisible(num, v2)) {
//             return true;
//         } else {
//             return false;
//         }
//     }); 
//     return result; 
// }

// // console.log("range: " + range(1, 100));

// console.log(multiples(2, 6)); // this will let me know if there is an remainder
// console.log(multiples(3, 6)); // this will let me know if there is an remainder
// console.log(multiples(5, 6)); // this will let me know if there is an remainder

//6. Write a find function that accepts an array of numbers and an individual number. 
//Return true if the number exists anywhere in the array or false if not.

function find(nums, v) {
    function isInIt(curr, num) {
        console.log("so far: " + curr + ", num: " + num + ", v: " + v);
        return (curr || (num === v));
    }
    console.log("nums: [" + nums + "]");
    console.log("v: " + v);
    return nums.reduce(isInIt, false);
    // let result = nums.filter(function(num) {
    //     console.log("num: " + num);
    //     if (num === v) {
    //         console.log("hit")
    //         return true; 
    //     } else {
    //         console.log("miss")
    //         return false; 
    //     }
    // });
    // console.log("result: [" + result + "]");
    // return result.length > 0; // this says if there is any number greater than zero in the results array, it should return true
}

let arr = [1, 2, 3, 4, 4, 3];
let val = 4; 
console.log(find(arr, val)); 