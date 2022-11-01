/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
}


function capSentence(text) {
   return text.split(" ").map(word => capitalize(word)).join(" ");
}



module.exports = capSentence