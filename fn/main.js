// function containsChar(str, char) {
//     for(let i = 0; i < str.length; i++) {
//         if(str[i] == char) {
//             return true
//         } else {
//             return false
//         }
//     }
// }
// console.log(containsChar('hello world', 'x'));

// function containsChar (str, char) {
//     for(let i = 0; i < str.length; i++) {
//         if(str[i] == char) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(containsChar('hello world', 'd'));

//revese
// function reverse(str) {
//     let output = ""
//     for(let i = str.length -1; i >= 0; i--) {
//         output = output + str[i];
//     }
//     return output
// }

// Replace char function
// let str = "hello";
// let char1 = "l";
// let char2 = "x";
// function replaceChar(str, char1, char2) {
//   let output = "";
//   for (leti = 0; i < str.length; i++) {
//     if (str[i] !== char1) {
//       output += str[i];
//     } else {
//       output += char2;
//     }
//   }
//   return output;
// }
// console.log(replaceChar(str, char1, char2));

//substring
// let str = "Hello";
// let start = 0;
// let stop = 2;

// function subString(str, start, stop) {
//     let output = ""
//   for (let i = start; i < stop; i++) {
//       output = output + str[i]
   
//   }
//   return output;
// }

// console.log(subString(str, start, stop));

// let str = "hello";
// let char = "world"

// function containsChar(str, char) {
//     let outPutStr = "";
//     let outPutChar = "";
//     for(let i= 0; i < str.length; i++) {
//         outputStr = outPutStr + str[i];
//     }
//     for(let y = 0; y < char.length; y++) {
//         outPutChar = outPutChar + char[y];
//     }
//     return outPutStr + outPutChar;
// }
// console.log(containsChar(str, char));