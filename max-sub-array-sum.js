// accept an array of integer and at number 
//the function should calculate the max sum of consecutive elements in array

const maxSubArraySum = (arr, n) => {
    if(arr.length < n) return null

    let max = 0;
    for(let i = 0; i < n; i++) {
        max = max + arr[i]
    }
    let tamp = max  // first window 
    for(let i = n; i < arr.length; i++) {
        // compare last tamp because last tamp have last window and here
        // we are using window by window to compare
        tamp = tamp - arr[i-n] + arr[i]  
        max = Math.max(tamp, max)
    }
    return max
}

  
// let arr = [1,2,5,2,8,1,5]
let arr = [4,2,1,6]

console.log(maxSubArraySum(arr, 1));