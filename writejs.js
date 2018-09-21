
var fs = require('fs');
var wstream = fs.createWriteStream('myOutput.txt');

function writeToStream(i) {
  for (; i < 35; i++) {
    if (!wstream.write(
      `<div class="carousel-item">
      <img class="d-block w-100" src="./imgs/img${i}.jpeg" alt="${i} slide">
    </div>\n`
      )) {
      // Wait for it to drain then start writing data from where we left off
      wstream.once('drain', function() {
        writeToStream(i + 1);
      });
      return;
    }
  }
  console.log('End!')
  wstream.end();
}

writeToStream(5);


