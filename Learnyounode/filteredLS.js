const path = require("path");
let fs = require("fs");

var pathToFile = process.argv[2]
var ext = '.' + process.argv[3]
 
fs.readdir(pathToFile, function (err, files) {
  if (err) {
      return console.error(err);
  };
  files.forEach(function(file) {
      if (path.extname(file) === ext) {
          console.log(file)
      }
  })
})