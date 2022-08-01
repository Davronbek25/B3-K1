/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sumTwoNum = function(x,y) {
    if(x===y) {
        return (x+y)*3
    }else return x + y
}
// console.log(sumTwoNum(3,2))
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
function twoNumChecker(x,y) {
    let sum = x + y
    if(x === 50 || y=== 50 || sum === 50) {
        return true
    }else return false
}
// console.log(twoNumChecker(4,50))
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const charRemover = (x, y) => {
    return x.substr(y,1)
}
// console.log(charRemover("my name is", 6))
/*
4)
 Create a function to find the largest of three given integers.
*/
const findBigNum = (x,y,z) => {
    if (x > y && x > z) {
        return x
    }
    else if (x < y && y > z) {
        return y
    }else return z
}
// console.log(findBigNum(14,9,5))
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const rangeChecker = (x,y) => {
    if(40 <= x && x <= 60 && 40 <= y && y <= 60) {
        return "between 40 and 60"
    }else if(70 <= x && x <= 100 && 70 <= y && y <= 100) {
        return 'between 70 and 100'
    }else return 'I dunno'
}
// console.log(rangeChecker(76, 92))
/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/
/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const test23 = (x) => {
    let num1 = x.slice(0,1).toString()
    let num2 = x.slice(1,2).toString()
    if(num1 === "1" || num1 === "3" || num2 === "1" || num2 === "3") {
        return true
    }else return false
}
// console.log(test23([12,33]))
/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3*/
/*
11)
Create a function to find the longest string from a given array of strings.
*/
const longStr = (x) => {
    let el1 = ''
    x.forEach(element => {
        if(el1.length < element.length) {
            el1 = element
        }
    });
    return el1
}
// console.log(longStr(["apple", "banana", "mango", "lemonade"]))
/*
12)
Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.*/

/*13)
Create a function to find the index of the greatest element of a given array of integers*/
const longStrInd = (x) => {
    let el1 = ''
    let index = null
    x.forEach(element => {
        if(el1.length < element.length) {
            el1 = element
        }
    });
    index = x.indexOf(el1)
    return index
}
// console.log(longStrInd(["apple", "banana", "mango", "lemonade"]))
/*14)
Create a function to get the largest even number from an array of integers.*/
const bigEven = (x) => {
    let numBig = null
    x.forEach(e => {
        let evenNum = e % 2
        if(evenNum === 0 && e > numBig) {
            numBig = e
        }
    })
    return numBig
}
// console.log(bigEven([4,3,2,5,7,8]))
/*15)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.*/

/*16)
Create a function to check from two given integers, whether one is positive and another one is negative.*/
const pnCheck = (x,y) => {
    if(x > 0 && y > 0) {
        return "both positive"
    }else if(x > 0 && y < 0) {
        return "x is positive and y is negative"
    }else return "y is positive and x is negative"
}
// console.log(pnCheck(-5, 2))
/*17)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.*/
const lowUpArr = (arr) => {
    if(arr.length > 3) {
        let newArr = []
        for(let i = 0; i < 3; i ++) {
            newArr.push(arr[i].toLowerCase())
        }
        for (let i = 3; i < arr.length; i++) {
            newArr.push(arr[i].toUpperCase())   
        }
        return newArr
    }else {
        let newArr = arr.map(e => {
            return e.toUpperCase()
        })
        return newArr
    }
}
// console.log(lowUpArr(["apple", "banana", "mango", "Lemonade"]))

const lowUpStr = (str) => {
    let newStr = ''
    if(str.length > 3) {
        for(let i = 0; i < 3; i++) {
            newStr = newStr.concat(str.slice(i, i+1).toLowerCase())
        }
        for(let i = 3; i < str.length; i++) {
            newStr = newStr.concat(str.slice(i, i+1).toUpperCase())
        }
        return newStr
    } else return newStr = str.toUpperCase()
}
// let str = 'Banana'
// let newStr = ''
// newStr = newStr.concat(str.slice(0,1).toLowerCase())
// newStr = newStr.concat(str.slice(1,2).toLowerCase())
// console.log(newStr)
// console.log(lowUpStr('array'))
/*18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.*/

/*19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".*/

/*20)
Create a
function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC */