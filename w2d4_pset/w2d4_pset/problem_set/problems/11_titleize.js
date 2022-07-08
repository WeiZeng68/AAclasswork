/***********************************************************************
Write a function `titleize(title, stopWords)` that takes in a string
`title` and an array of strings `stopWords`. Return the `title` where
every word that does not exist in the `stopWords` array is capitalized;
all others lowercase.

Hints: Decompose this problem into helper functions. Perhaps create these,
- removePunctuation(word)
- isStopWord(word, stopWords)

Examples:

titleize("forest gump, the runner", ["the"])
=> "Forest Gump, the Runner"

titleize("MASTER AND COMMANDER", ["and"])
=> "Master and Commander"

titleize("i LOVE; lover of mine", ["love", "of"])
=> "I love; Lover of Mine"

titleize("shall we dance?", ["dance"])
=> "Shall We dance?"
***********************************************************************/

//First write a function removePunctuation(word) that takes in a single
//word and returns that same word without any punctuation at the end. Feel
//free to use the punctuation array we've given you below.

function removePunctuation(word) {
    let punctuation = [";", "!", ".", "?", ",", "-"];
    let lastChar = word[word.length - 1];

    if (punctuation.indexOf(lastChar) > -1) {
        return word.slice(0, -1)
    } else {
        return word;
    }
}

// console.log(removePunctuation('ayo!'))
// console.log(removePunctuation('glizzy'))

// - Second, write a function isStopWord(word, stopWords) that takes in a
// single word and returns true if it is a stop word. The check will vary
// depending on if the word contains punctuation or not, so use your
// removePunctuation function before checking.
function isStopWord(word, stopWords) {
    let char = removePunctuation(word) 
    
    if (stopWords.indexOf(char) > -1) {
        return true;
    } else {
        return false;
    }
}

function titleize(title, stopWords) {
    let words = title.split(" ");
    let newTitle = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();

    if (isStopWord(word, stopWords)) {
      newTitle.push(word);
    } else {
      word = word[0].toUpperCase() + word.slice(1);
      newTitle.push(word);
    }
  }

  return newTitle.join(" ");
}

console.log(titleize("forest gump, the runner", ["the"]))
//=> "Forest Gump, the Runner"

console.log(titleize("MASTER AND COMMANDER", ["and"]))
//=> "Master and Commander"

console.log(titleize("i LOVE; lover of mine", ["love", "of"]))
//=> "I love; Lover of Mine"

console.log(titleize("shall we dance?", ["dance"]))
//=> "Shall We dance?"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = titleize;
