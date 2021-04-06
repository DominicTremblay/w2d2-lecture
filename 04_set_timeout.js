const displayLater = (callback) => {
  let pet = '🐱';
  console.log('BEFORE CALL: ', pet);

  setTimeout(() => {
    pet = '🐶';
    callback(pet);
  }, 3000);


  console.log('AFTER CALL', pet); 

};

// What is the content of result?

const result = displayLater((pet) => console.log('INSIDE CALL: ', pet));
console.log(result);
