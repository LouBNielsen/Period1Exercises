// ved require kan vi benytte os af readFileSync() 
var fs = require('fs');

// We can access index 2 of process.argv to read the contents passed as the third argument to the command line.
var filename = process.argv[2];

// The readFileSync() method returns the buffer object when the read is complete.
var contents = fs.readFileSync(filename);

// buffer object to a string and split the string at each new line (‘\n’) and get the length with .length.
var lines = contents.toString().split('\n').length - 1

console.log(lines);