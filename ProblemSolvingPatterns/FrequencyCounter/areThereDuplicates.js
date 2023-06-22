// implement a funciton which accepts a variable number of args and
// checks whether there are any duplicates among the args

function areThereDuplicates() {
    let collection = {};
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
    }    
    for (let key in collection) {
        if (collection[key] > 1) return true;
    }
    return false;
}