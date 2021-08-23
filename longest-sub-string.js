// longestUniqueSubstring 
//which accept a string and return the length of
//longest substring with all distinct elements


const longestUniqueSubstring = (str) => {
  let longest = 0;
  let start = 0;
  let map = {};

  //loop over the string
  for(let i = 0; i < str.length; i++) {
    let currentElem = str[i];
    
    //cond 1
    //check current element is visited
    if(map[currentElem]) {
      //update start point
      //cond 2
      start = Math.max(start, map[currentElem])
    }
  
    //cond 3
    //increasr lengest point
    longest = Math.max(longest, i - start + 1);
  
    //cond 4
    //every elements map in map obj with there last location
    map[currentElem] = i + 1;
  }

  return longest;

}



  console.log(longestUniqueSubstring('sasavrertyjnvd'))