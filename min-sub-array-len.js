//accept two parameters 
// an array of positive integer and a positive interger
// return the minimal length of a contiguous sub array of which 
//   the sum is greater than or equal to the integer passed to the function


const minSubArrayLen = (arr, n) => {
    let result = Infinity;
    let sum = 0;
    let left = 0;
    let right = 0;

    while(left < arr.length) {
        // compare n with sum
        if(sum < n && right < arr.length){   //condition 1
            sum += arr[right];
            right++
        } else if( sum >= n) {    //condition 2
            result = Math.min(result, right - left);
            sum -= arr[left];
            left++;
        }  else {   //condition 3
            break;
        }
    }

    return {result, left, right }
}

let arr = [2,3,1,2,4,3]
let n = 4

console.log(minSubArrayLen(arr, n))