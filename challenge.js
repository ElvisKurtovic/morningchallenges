// let str = "hello"
// let getMax = function (str) {
//     let max = 0,
//         maxChar = '';
//     str.split('').forEach(function (char) {
//         if (str.split(char).length > max) {
//             max = str.split(char).length;
//             maxChar = char;
//         }
//     });
//     return getMax('hello');
// };


// function mostCommonletter(str) {
//     let characters = str.split("")
//     let dict = {}
//     characters.forEach(c => {
//         if (!dict[c]) {
//             dict[c] = 0
//         }
//         dict[c]++

//     })
//     return dict

// }

// mostCommonletter('hello')


// function factorize(n) {
//     let number = n;
//     let answers = [];
//     for (let i = 0; i <= n; i++) {
//         if (n % i == 0) {
//             answers.push(i)
//         }
//     } return answers
// }

// factorize()

// function timeConvert(min) {
//     let num = min;
//     let hours = (num / 60);
//     let rhours = Math.floor(hours)
//     let minutes = (hours - rhours) * 60
//     let rminutes = Math.round(minutes)
//     return num + "minutes =" + rhours + ":" + rminutes
// }

// console.log(timeConvert(200))


// function isTriangle(num1, num2, num3) {
//     if (num1 + num2 > num3 && num1 + num3 > num2 && num3 + num2 > num1) {
//         return true
//     }
//     else { return false }
// }


// let testData = [
//     "eedadn",
//     "drvtee",
//     "eandsr",
//     "raavrd",
//     "atevrs",
//     "tsrnev",
//     "sdttsa",
//     "rasrtv",
//     "nssdts",
//     "ntnada",
//     "svetve",
//     "tesnvt",
//     "vntsnd",
//     "vrdear",
//     "dvrsen",
//     "enarar",
// ]
// function repeaterCode(arr) {
//     let out = ''
//     for (let col = 0; col < arr[0].length; col++) {
//         let dict = {}
//         let largest = ''
//         let largestCount = 0
//         arr.forEach(str => {
//             let char = str[col]
//             if (!dict[char]) {

//                 dict[char] = 1
//             } else {
//                 dict[char]++
//             }
//             if (dict[char] > largestCount) {
//                 largest = char
//                 largestCount = dict[char]
//             }
//         }

//         )
//         out += largest
//     }
//     return out
// }
// repeaterCode(testData)
// function maxChar(str) {
//     const obj = {};
//     str.split('').forEach(char => obj[char] + 1 || 1);
//     return Object.keys(obj).reduce((prev, next) => obj[a] >= obj[b] ? a : b);
// }


function sumMult() {
    let num = 0
    for (let i = 1; i <= 1000; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            num += i
        }
    }
    return num
} 