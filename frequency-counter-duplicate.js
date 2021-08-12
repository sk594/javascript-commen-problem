// make a function areThereDuplicates 
// which accept a variable name of arguments
//checks whether there are any duplicates among the arguments passed in


//using key counter obj
const duplicateCheck = (...arg) => {
    let map = {}

    for(let i = 0; i < arg.length; i++) {
        map[arg[i]] = ++map[arg[i]] || 1
    }

    for(let key in map) {
        console.log(key)
        if(map[key] > 1) return false
    }
    return true
}

//using Set function
const duplicateCheckSet = (...arg) => {
    if((new Set(arg)).size !== arg.length) return false
    return true
}



console.log(duplicateCheck('a','f','r','c','e', 'a'));