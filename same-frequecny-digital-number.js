//given two positive integer
//find out if the tow number have same frequncy of digits

const sameFrequecny = (n1, n2) => {
    str1 = n1.toString();
    str2 = n2.toString();

    if(str1.length !== str2.length) return false;

    let obj = {};

    //make a unique obj for str1
    for(let i = 0; i < str1.length; i++) {
        obj[str1[i]] = ++obj[str1[i]] || 1
    }

    //check all str2's digit in available in obj or not
    for(let i = 0; i < str2.length; i++) {
        if(str2[i] in obj){
            if(obj[str2[i]] < 1) return false
            obj[str2[i]]--
        }else {
            return false
        }
    }
    return true
}

let n1 = 123323;
let n2 = 312233;

console.log(sameFrequecny(n1, n2))