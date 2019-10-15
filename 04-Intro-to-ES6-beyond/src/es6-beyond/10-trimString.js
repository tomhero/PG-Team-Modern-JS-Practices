// In ES10, you can determine trim direction of String

const message = '   Hello ES10   ';

console.log(message.trimStart()); // outputs 'Hello ES10   '
console.log(message.trimEnd()); // outputs '   Hello ES10'
console.log(message.trim()); // outputs 'Hello ES10'

//////////////////// NOTE ////////////////////
/*
*   Both of them have an alias 
*   `trimLeft` and `trimRight` correspondingly
*   Please don't be confused
*/