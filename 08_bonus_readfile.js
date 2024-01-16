// we need fs and path
const fs = require('fs');
const path = require('path');

// create a callback funtion that is used with the readFile to print the content

// create a function to read the file

// msg1_path = '/text_files/sushi1.txt'
const msg1_path = path.join(__dirname, 'text_files', 'sushi1.txt');

// pet2 = '/text_files/sushi2.txt'
const msg2_path = path.join(__dirname, 'text_files', 'sushi2.txt');


// 'Start Reading files...';
console.log('Start Reading files...');

// read msg1


// 'Finished reading msg1'
console.log('Finished reading msg1');

// read msg2


// Finished reading msg2
console.log('Finished reading msg2');

// What will bre the order of console.logs ?
