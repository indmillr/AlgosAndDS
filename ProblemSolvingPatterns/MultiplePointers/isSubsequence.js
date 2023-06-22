// write a function that takes two strings and checks whether the chars in the first string
// form a subsequence of the chars in the second string.
// (check if the chars in the first string appear somewhere in the second string without their order changing)

function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) {
            i++;
        }
        if (i === str1.length) {
            return true;
        }
    }
    return false;
}