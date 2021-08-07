// accept sorted array
// count the unique value in the array

const countUniqueValue = (arr) => {
    if(arr.length == 0) return 0;
    let i = 0
    for(let j = 0; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}

let arr = [1]
console.log(countUniqueValue(arr));