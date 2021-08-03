// frequency counter problem


// naive solution
// TC => O(n*n)
// not a effictive solution
const same_naive = (arr1, arr2) => {
    if(arr1.length !== arr1.length) return false;
    
    for(let i = 0; i < arr1.length; i++){
        let currentIndex = arr2.indexOf(arr1[i]**2);
        if(currentIndex == -1) return false;
        arr2.splice(currentIndex, 1);
    }
    return true;

}


//TC  => O(n)
const same = (arr1, arr2) => {
    if(arr1.length !== arr2.length) return false

    let fc1 = {}
    let fc2 = {}
    
    //count frequency of arr1
    for(let item of arr1) {
        fc1[item] = ++fc1[item] || 1;
    }
    //count frequency of arr2
    for(let item of arr2) {
        fc2[item] = ++fc2[item] || 1;
    }

    //compare fc1 and fc2
    for(let key in fc1) {
        if(!(key**2 in fc2)) return false;
        if(fc1[key] !== fc2[key**2]) return false;
    }
    return true;

}


console.log(same([1,2,1], [4,1,1]))  // true
//same([1,2,3], [1,9]) //false
//same([1,2,1], [4,4,1]) //false