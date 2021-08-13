// isSubsequence
// which takes in two strings 
//and checks whether the characters in the first string form a subsequence of the characters in the second string. 
//In other words, the function should check whether the characters in the first string appear somewhere in the second string, 
//without their order changing.

const isSubsequence = (str1, str2) => {
    if(str1.length > str2.length) return false

    let j = 0
    for(let i = 0; i < str2.length; i++) {
        if(str1[j] == str2[i]){
            j++
        }
        console.log(j, str1.length)
        if(j === str1.length) return true;
    }
    return false
}
// function isSubsequence(str1, str2) {
//   var i = 0;
//   var j = 0;
//   if (!str1) return true;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }
//   return false;
// }


const recursiveIsSubsequence = (str1, str2) => {
    if(str1.length === 0) return true
    if(str2.length === 0) return false

    if(str1[0] === str2[0]) return recursiveIsSubsequence(str1.slice(1), str2.slice(1))
    return recursiveIsSubsequence(str1, str2.slice(1))
}

let str1 = 'hello'
let str2 = 'hell world'

console.log(recursiveIsSubsequence(str1, str2))