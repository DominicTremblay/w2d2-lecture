const displayLater = (callback) => {

  // const callback = (pet) => console.log('INSIDE CALL: ', pet)

  let pet = '🐱';
  console.log('BEFORE CALL: ', pet);

  setTimeout(() => {
    pet = '🐶';
    callback(pet);
  }, 3000);

  console.log('AFTER CALL', pet);
};

displayLater((pet) => console.log('INSIDE CALL: ', pet));

// What will be the order of the console.logs?
// 1. 'BEFORE CALL: '🐱''
// 2. 'AFTER CALL 🐱'
// 3. 'INSIDE CALL: 🐶'