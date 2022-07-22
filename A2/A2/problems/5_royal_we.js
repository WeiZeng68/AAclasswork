/*******************************************************************************
Write a function royalWe(sentence) that returns an string where every word
'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
word 'my' is replaced with 'our', and every word 'me' is replaced with "us"

Examples:

royalWe("I want to go to the store") => "we want to go to the store"
royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
royalWe("This is mine") => "This is ours"
royalWe("Jump for my love") => "Jump for our love"
*******************************************************************************/

function royalWe(sentence) {
  let newSentence = sentence.split(' ');
  let array = []

  for (let i = 0; i < newSentence.length; i++) {
    let words = newSentence[i]
    if (words === 'I') {
      array.push('we')
    } else if (words === 'mine') {
      array.push('ours')
    } else if (words === 'my') {
    array.push('our')
    } else if (words === 'me') {
      array.push('us')
    } else { 
      array.push(words) 
    }
  }
  return array.join(' ');
}

console.log(royalWe("I want to go to the store"));
console.log(royalWe("This is my house and you will respect me"));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = royalWe;
