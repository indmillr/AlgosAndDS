// write a function that takes an object and finds all the values that are numbers
// then converts them to strings

function stringifyNumbers(obj) {
    let newObj = {}
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString();
        }
        else if (typeof obj[key] === 'object' && !Array.isArray(obj[key]))
        {
            newObj[key] = stringifyNumbers(obj[key]);
        }
        else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}