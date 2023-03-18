// 1 Given a string of characters as input, write a function that returns it with the characters reversed.

// let s = "hello world"
// let str = ""
// for (let i = 0; i < s.length; i++) {
//     str = s[i] + str
// }
// console.log(str)


// 2 A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.

// let s = "madam"
// let str = ""

// for (let i = 0; i < s.length; i++) {
//     str = s[i] + str
// }

// if (str == s) {
//     console.log("true")
// }else{
//     console.log("false")
// }

// 3 Given an integer, reverse the order of the digits.

// let num = 1200
// let str = ""
// let c = true
// let qaliq = 0
// let yeni = 0
// while (c) {
//     qaliq = num % 10
//     yeni = yeni * 10 + qaliq
//     num = Math.round(num / 10)
//     if (num === 0) {
//         console.log(yeni)
//         c = false
//     }
// }


// 4. Fizz Buzz Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

// let num = 6
// if (num % 2 == 0 && num % 3 == 0) {
//     console.log("Fizz Buz")
// }
// else if (num % 2 == 0) {
//     console.log("Fizz")
// }
// else if (num % 3 == 0){
//     console.log("Buz")
// }

// 5 Given a string of characters, return the character that appears the most often.

// function builObj(str) {
//     let charObj = {}
//     str = str.toLowerCase()
//     str = str.replace(/[\s.,%]/g, '')
//     for (let char of str) {
//         charObj[char] = charObj[char] + 1 || 1
//     }
//     return charObj
// }

// function mostObj(strObjA) {
//     let aCharObj = builObj(strObjA)

//     console.log(aCharObj)

//     let maxCount = 0
//     let maxCharacter = ''

//     for (const key in aCharObj) {
//         if (aCharObj[key] > maxCount) {
//             maxCount = aCharObj[key]
//             maxCharacter = key
//         }
//     }

//     console.log(maxCharacter)
// }


// mostObj("hello world")




// 6. Anagrams

// function buildChildObj(str) {
//     let charObj = {}
//     str = str.toLowerCase()
//     for (let char of str) {
//         charObj[char] = charObj[char] + 1 || 1
//     }
//     return charObj
// }

// function anagrams(strA, strB) {
//     let aCharObj = buildChildObj(strA)
//     let bCharObj = buildChildObj(strB)

//     console.log(aCharObj)
//     console.log(bCharObj)

//     if (Object.keys(aCharObj).length !== Object.keys(bCharObj).length) {
//         return false
//     }

//     for (let char in aCharObj) {
//         if (aCharObj[char] !== bCharObj[char]) {
//             return false
//         }
//     }
//     return true
// }

// console.log(anagrams("hello world", "world hello"))

// 7. Vowels

// let str = "hello world".toLowerCase()

// function vowel(str) {
//   var vowel_list = 'aeiou';
//   var count = 0;
  
//   for(var x = 0; x < str.length ; x++) {
//     if (vowel_list.indexOf(str[x]) !== -1) {
//       count += 1;
//     }
//   }
//   return count;
// }
// console.log(vowel(str))