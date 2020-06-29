let speech = "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived" +
    " in Liberty, and dedicated tot he propostition that all men are created equal."

console.log(speech.indexOf('y'));

console.log(speech.split(' ').length);

// write a line of code that will get the word 'fathers' from the string
console.log(speech.split(' ')[7]);
console.log(speech.substr(speech.indexOf('fathers'), 7));
console.log(speech.substring(speech.indexOf('f'), speech.indexOf('ers') + 4));
console.log(speech.slice(35, 42));