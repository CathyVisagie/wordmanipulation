let word = prompt (`Input a word`)
let ascii
let strAscii
let array
let newWord
let word2

// The word where every second character is replaced with a ’!’.
let split = (word).split(""); // splits the letters
for ( i = 1; i < split.length ; i+=2) {  //selects every second letter
     split[i] = "!";  // replaces selected letters with !
 newWord = ( split.join ("")) // puts the split letters back together with the new !       
}


// The word reversed.

let reverse = word.split("").reverse().join(""); // reverses the word


// The word where every 6th letter is uppercase.
let split2 = (word).split(""); // splits the letters I could not work out how to use the first split again
for (i = 5; i < split2.length ; i+=6) { // select every 6th letter
     split2[i] = split2[i].toUpperCase(); // converts selected letters to uppercase

word2 = ( split2.join("") );  // puts the word back together
}
// An array of the ascii values for each character in the word.
strAscii = ([...word]) => {   // I did a lot of research for this funtion, and put together this code using trial and error. I don't fully understand it
     array = word.map ((char) => {
    return char.charCodeAt(0)
  })
  return array
 }


console.log (newWord); // prints the word with !
console.log (reverse); // prints the reversed word
console.log (word2); // prints the word with evert 6th letter capitalised
console.log(strAscii(`${word}`)); // prints the ascii values

// Note my code is very messy and I am not happy with it, but any attempts I have made to neaten it up have resulted in a failed run. 
// There comes a time to admit defeat- I really tried here