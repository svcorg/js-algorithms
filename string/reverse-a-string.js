// ES6 implementations

/* Implementation 1: using array split & reverse
 *
 * Explanation: splitting a string to create an array of characters and then reversing the array,
 * joining them to create an array
 *
 * Example:
 * let the string be "This is a test"
 * step 1: splitting the string by '' creates an array of characters.
 *        ['T', 'h', 'i', 's', ' ', 'i', 's', ' ', 'a', ' ', 't', 'e', 's', 't']
 *
 * step 2: reverse the array: ["t", "s", "e", "t", " ", "a", " ", "s", "i", " ", "s", "i", "h", "T"]
 * step 3: joining the array with empty string creates: "tset a si sihT"
 *
 */

const reverseString1 = (str) => str.split('').reverse().join('');


/* Implementation 2: looping through the string and mutating a new string to create reversed string
 *
 * Explanation: using a new string `reversedString` to store the result. looping through each character of the
 * string from the end and appending it to `reversedString`
 *
 * Example:
 * let the string be "not now"
 * step 1: set reversedString to '' // Empty string
 * step 2: looping though string from the end
 *    index would be length of string - 1 which makes index = (7 - 1) = 6
 *    index >= 0, true and hence it goes into loop
 *    the reversesString will be mutated to reversedString + str[6](w) which becomes "w"
 *
 *    now the index will be decremented by 1 which makes index = 5
 *    index >= 0, true and hence it goes into loop
 *    reversedString + str[5]("o")
 *    the reversesString will be mutated which becomes "wo"
 *
 *    now the index will be decremented by 1 which makes index = 4
 *    index >= 0, true and hence it goes into loop
 *    reversedString + str[4]("n")
 *    the reversesString will be mutated which becomes "won"
 *
 *    now the index will be decremented by 1 which makes index = 3
 *    index >= 0, true and hence it goes into loop
 *    reversedString + str[3](" ")
 *    the reversesString will be mutated which becomes "won "
 *
 *    now the index will be decremented by 1 which makes index = 2
 *    index >= 0, true and hence it goes into loop
 *    reversedString + str[2]("t")
 *    the reversesString will be mutated which becomes "won t"
 *
 *    now the index will be decremented by 1 which makes index = 1
 *    index >= 0, true and hence it goes into loop
 *    reversedString + str[1]("o")
 *    the reversesString will be mutated which becomes "won to"
 *
 *    now the index will be decremented by 1 which makes index = 0
 *    index >= 0, true and hence it goes into loop
 *    reversedString + str[0]("n")
 *    the reversesString will be mutated which becomes "won ton"
 *
 *    now the index will be decremented by 1 which makes index = -1
 *    index >= 0, false and hence it doesn't get into loop
 *
 *    end of the loop and the reversedString contains the reversed string
 *
 */

const reverseString2 = (str) => {
    let reversedString = '';
    for (let index = str.length - 1; index >= 0; index -= 1) {
        reversedString += str[index];
    }
    return reversedString;
};


/* Implementation 2: looping through the string and using a array of characters to create reversed string
 *
 * Explanation: splitting a string to create an array of characters and then reversing the array,
 * joining them to create reversed string
 *
 * This method is a hybrid of method 1 & 2
 *
 * Example:
 * let the string be "not now"
 * step 1: set reversedCharacters to [] // Empty array
 * step 2: looping though string from the end
 *    index would be length of string - 1 which makes index = (7 - 1) = 6
 *    index >= 0, true and hence it goes into loop
 *    the reversedCharacters will be appended with str[6] which is "w" which makes reversedCharacters = ["w"]
 *
 *    now the index will be decremented by 1 which makes index = 5
 *    index >= 0, true and hence it goes into loop
 *    reversedCharacters.push(str[5]("o"))
 *    the reversedCharacters will be become ["w", "o"]
 *
 *    now the index will be decremented by 1 which makes index = 4
 *    index >= 0, true and hence it goes into loop
 *    reversedCharacters.push(str[4]("n"))
 *    the reversedCharacters will be become ["w", "o", "n"]
 *
 *    now the index will be decremented by 1 which makes index = 3
 *    index >= 0, true and hence it goes into loop
 *    reversedCharacters.push(str[3](" "))
 *    the reversedCharacters will be become ["w", "o", "n", " "]
 *
 *    now the index will be decremented by 1 which makes index = 2
 *    index >= 0, true and hence it goes into loop
 *    reversedCharacters.push(str[2]("t"))
 *    the reversedCharacters will be become ["w", "o", "n", " ", "t"]
 *
 *    now the index will be decremented by 1 which makes index = 1
 *    index >= 0, true and hence it goes into loop
 *    reversedCharacters.push(str[1]("o"))
 *    the reversedCharacters will be become ["w", "o", "n", " ", "t", "o"]
 *
 *    now the index will be decremented by 1 which makes index = 0
 *    index >= 0, true and hence it goes into loop
 *    reversedCharacters.push(str[0]("n"))
 *    the reversedCharacters will be become ["w", "o", "n", " ", "t", "o", "n"]
 *
 *    now the index will be decremented by 1 which makes index = -1
 *    index >= 0, false and hence it doesn't get into loop
 *
 *    end of the loop
 *    we join the array reversedCharacters with empty string which is reversed string
 *
 */

const reverseString3 = (str) => {
    let reversedCharacters = [];
    for (let index = str.length - 1; index >= 0; index -= 1) {
        reversedCharacters.push(str[index]);
    }
    return reversedCharacters.join('');
};