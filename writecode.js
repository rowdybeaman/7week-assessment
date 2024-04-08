///// 1) Sum Zero ///////////////////////////////////////////
function addToZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true;
            }
        }
    }
    return false;
}
console.log(addToZero([]));
console.log(addToZero([1]));
console.log(addToZero([1, 2, 3])); 
console.log(addToZero([1, 2, 3, -2])); 

console.time("addToZero");
addToZero([])
addToZero([1])
addToZero([1, 2, 3])
addToZero([1, 2, 3, -2]);
console.timeEnd("addToZero");
// 0.065ms
// space complexity: O(1)

///// 2) Unique Characters ////////////////////////////////

function uniqueChars(word) {
    const charSet = new Set(); // i looked up a few things on this and Set came up, i dont remember if we learned how to use it in lecture or not, but it seamed the obvious choice for detecting repeat characters
  
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (charSet.has(char)) {
            return false; 
        }
        charSet.add(char);
    }
    return true; 
}

console.log(uniqueChars("Monday"));
console.log(uniqueChars("Moonday"));

console.time("uniqueChars");
uniqueChars("Monday")
uniqueChars("Moonday")
console.timeEnd("uniqueChars");
// 0.019ms
// space complexity: O(n)

///// 3) Pangram Sentence ///// //////////////////////////////////////////////

function pangramSentance(sentence) {
    sentence = sentence.toLowerCase();
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
        return alphabet.every(letter => sentence.includes(letter));
}

console.log(pangramSentance("The quick brown fox jumps over the lazy dog!")); 
console.log(pangramSentance("I like cats, but not mice")); 

console.time("pangramSentance");
pangramSentance("The quick brown fox jumps over the lazy dog!")
pangramSentance("I like cats, but not mice")
console.timeEnd("pangramSentance");
// 0.005ms
// space complexity: O(1)

////// 4) Longest Word ////////////////////////////////////////////////////////////

function longestWord(words) {
    let maxLength = 0;
    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }
    return maxLength;
}

console.log(longestWord(["hi", "hello"]));

console.time("longestWord");
longestWord(["hi", "hello"])
console.timeEnd("longestWord");
// 0.004ms
// space complexity: O(1)