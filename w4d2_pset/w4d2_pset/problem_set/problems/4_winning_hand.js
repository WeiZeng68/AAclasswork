/***********************************************************************
Write a function winningHand(hand1, hand2) that takes in two strings
representing a hand of 4 cards. Return the string of the hand with the
higher total score. If there is a tie, return 'DRAW'. Possible cards are
J, Q, K.

J = 1 point
Q = 2 points
K = 3 points

Examples:

winningHand('JQKJ', 'QQJJ'); // => 'JQKJ'
winningHand('KJKJ', 'QQQK'); // => 'QQQK'
winningHand('JKJJ', 'QQJJ'); // => 'DRAW'
winningHand('KJKJ', 'QQQQ'); // => 'DRAW'
***********************************************************************/

function scoreCount(string) {
    let value = {
        'J': 1,
        'Q': 2,
        'K': 3
      }
    let count = 0;
     
    for (let i = 0; i < string.length; i++) {
        let card = string[i];
        count += value[card]
    }
    return count;
}

function winningHand(hand1, hand2) {
    let score1 = scoreCount(hand1);
    let score2 = scoreCount(hand2);

    if (score1 > score2) return hand1;
    if (score2 > score1) return hand2;
    else return 'DRAW';
}

console.log(winningHand('JQKJ', 'QQJJ')); // => 'JQKJ'
console.log(winningHand('KJKJ', 'QQQK')); // => 'QQQK'
console.log(winningHand('JKJJ', 'QQJJ')); // => 'DRAW'
console.log(winningHand('KJKJ', 'QQQQ')); // => 'DRAW'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = winningHand;
