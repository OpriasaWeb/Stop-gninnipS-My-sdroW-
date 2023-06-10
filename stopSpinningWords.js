// June 10, 2023
// CodeWars: Stop gninnipS My sdroW! (6 kyu challenge)
// Description: Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


function spinWords(string){
  //TODO Have fun :)
  // Split the value per space
  var splitString = string.split(' ');
  var spinningWords = '';
  for(let i = 0; i < splitString.length; i++){

    // set the word variable to store the word per iteration
    var word = splitString[i];

    // and if the word is greater than or equal to 5, reverse it using the reverse function coded below
    if(word.length >= 5){
      // and set it to word variable again
      word = reverseWords(word);
    } 

    // per iteration add the word to the spinningWords variable and all who pass the condition
    spinningWords += word + " ";
  }
  // trim is to get rid of spaces
  return spinningWords.trim();
}
console.log(spinWords("Welcome"))
console.log(spinWords("Hey fellow warriors"))

// Reverse word code function
function reverseWords(string){
  
  var addString = '';
  
  // Logic reverse loop to get the end to first for the rest of the iteration
  for(let j = string.length - 1; j >= 0; j--){
    addString += string[j];
  }
  return addString;
}


