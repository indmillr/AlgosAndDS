// write a function that capitalizes each word in a given arr of words

function capitalizeWords(arr) {
    if (arr.length === 1) {
        return [arr[0].toUpperCase()];
    }
    let result = capitalizeWords(arr.slice(0, -1));
    result.push(arr.slice(arr.length - 1)[0].toUpperCase());

    return result;
}