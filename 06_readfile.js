const fs = require('fs');
const path = require('path');

// callback funtion that is used with the readFile
const printPet = function (err, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
};

const getFile = (file) => {
  fs.readFile(file, 'utf8', printPet); // this statement is async
  console.log('Inside getFile');
};
// const pet1_path = '/text_files/pet1.txt'
const pet1_path = path.join(__dirname, 'text_files', 'pet.txt');
// const pet2 = '/text_files/pet2.txt'
const pet2_path = path.join(__dirname, 'text_files', 'pet2.txt');

console.log('Start Reading files...');

getFile(pet1_path);
console.log('Finished reading pet1');

getFile(pet2_path);
console.log('Finished reading pet2');

// What will bre the order of console.logs ?

// 1. 'Start Reading files...'
// 2. 'Inside getFile'
// 3. 'Finished reading pet1'
// 4. 'Inside getFile'
// 5. 'Finished reading pet2'
// 6. 'Hello I am Beanie! 🐰'
// 7. 'Hello I am Birdy! 🐤'


// Asyn calls for later:
// fs.readFile('/text_files/pet1.txt', 'utf8', printPet); //1
// fs.readFile('/text_files/pet2.txt', 'utf8', printPet) // 2