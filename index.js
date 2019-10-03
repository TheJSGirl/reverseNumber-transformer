const fs = require('fs');
const file = fs.createWriteStream('numList.txt');


function createFile() {
  file.on('error', function(err) { /* error handling */ });
  file.write("124");
  file.write("\n");
  file.write("4567");
  file.write("\n");
  file.write("234");
  file.write("\n");
  file.write("545");
  file.write("\n");
  file.write("678");
  file.end();
}

readFile();