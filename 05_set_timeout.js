const displayLater = (callback) => {
  let pet = '🐱';
  console.log('BEFORE CALL: ', pet);
  
  

    
  setTimeout(() => {
    pet = '🐹';
    callback(pet);
  }, 2000);

  setTimeout(() => {
    pet = '🐶';
    callback(pet);
  }, 2000);

  
  console.log('AFTER CALL', pet); 
  
};

displayLater((pet) => console.log('INSIDE CALL: ', pet));

// What will be the order of the console.logs?
// 1. 'BEFORE CALL: 🐱'
// 2. 'AFTER CALL 🐱'
// 3. 'INSIDE CALL: 🐹'
// 4. 'INSIDE CALL: 🐶'
