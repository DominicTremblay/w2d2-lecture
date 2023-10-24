// we need fs and path
const fs = require('fs');
const path = require('path');

// create a callback funtion that is used with the readFile to print the content

const printMsg = (err, msg) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Printing ${msg}`);
};

// create a function to read the file

const getFile = function (filePath) {
  fs.readFile(filePath, 'utf-8', printMsg);
  console.log(`Inside getFile for ${filePath}`);
};

// msg1_path = '/text_files/sushi1.txt'
// create path
const msg1_path = path.join(__dirname, 'text_files', 'sushi1.txt');

// pet2 = '/text_files/sushi2.txt'
// create path
const msg2_path = path.join(__dirname, 'text_files', 'sushi2.txt');

console.log('Start Reading files...');

// read msg1

getFile(msg1_path);
console.log('finished reading msg1');

// 'Finished reading msg1'

// read msg2_path
getFile(msg2_path);

console.log('Finished reading msg2');

// What will bre the order of console.logs ?
