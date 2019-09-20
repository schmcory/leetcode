//Author: Cory Schmidt
//Original Challenge: https://leetcode.com/problems/unique-morse-code-words/

var uniqueMorseRepresentations = function(words) {
  
    //CREATE DICTIONARY//
    let morseCodes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let alpha = "abcdefghijklmnopqrstuvwxyz".split(''); 
    let key;
    let value;
    let dict = {};
    for(let i = 0; i < morseCodes.length; i++) {
        key = alpha[i]; 
        value = morseCodes[i]; 
        dict[key] = value; 
    }
    //END DICTIONARY//
 
    let map = words.map(word => word.split('').map(letter => dict[letter]).join('')); 

    let size = new Set(map).size; 

    //console.log(map);
    //console.log(set); 

   return size; 
};

wordArr = ["gin", "zen", "gig", "msg"];
uniqueMorseRepresentations(wordArr); 
