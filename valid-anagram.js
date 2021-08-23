// frequency counter problem

const validAnagram = (str1, str2) => {
    if(str1.length !== str2.length) return false;

    const map = {}

    // count frequency of str1
    for(let item of str1) {
        map[item] = ++map[item] || 1;
    }
    //compare str2 with map object
    for(let item of str2) {
        if(!map[item]) return false;
        else map[item]--; 
    }
    return true;findLongestSubstring
}


// with js=avascript in build function => split, sort, join
const validAnagramJSInBuidFn = (str1, str2) => {
    if(str1.length !== str2.length) return false;

    return str1.split('').sort().join('') === str2.split('').sort().join('')

}

console.log(validAnagram('cat', 'cfa'));
// validAnagram('anagram', 'nagaram')