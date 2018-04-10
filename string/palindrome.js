const palindrome1 = (str) => str === str.split('').reverse().join('');

const palindrome2 = (str) => {
    for (let beginIndex = 0, endIndex = str.length - 1; beginIndex <= endIndex; beginIndex += 1, endIndex -= 1) {
        if(str[beginIndex] !== str[endIndex]) {
            return false;
        }
    }
    return true;
};