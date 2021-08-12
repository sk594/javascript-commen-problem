// averagePair
//Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the target average


// make two pointer and one is starting and second is last point and compere avg with no
const averagePair = (arr, no) => {
    let start = 0;
    let end = arr.length - 1;

    while(start < end) {
        let avg = (arr[start] + arr[end]) / 2;
        console.log(avg, no, start, end);
        if(avg === no) return [arr[start] , arr[end]]
        if(avg > no) end--
        else start++
    }
    return false

}

console.log(averagePair([1,2,3,4,5], 3.5));