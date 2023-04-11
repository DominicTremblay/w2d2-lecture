const fs = require('fs');
const path = require('path');

// callback funtion that is used with the readFile
const printMsg = function (err, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
};

const getFile = (file) => {
  fs.readFile(file, 'utf8', printMsg);
  console.log('Inside getFile');
};
// msg1_path = '/text_files/suchi1.txt'
const msg1_path = path.join(__dirname, 'text_files', 'sushi1.txt');
// pet2 = '/text_files/sushi2.txt'
const msg2_path = path.join(__dirname, 'text_files', 'sushi2.txt');

console.log('Start Reading files...');

getFile(msg1_path);
console.log('Finished reading msg1');

getFile(msg2_path);
console.log('Finished reading msg2');

// What will bre the order of console.logs ?
