const displayLater = (callback) => {
  let pet = '🐱';
  console.log('BEFORE CALL: ', pet);

  setTimeout(() => {
    pet = '🐶';
    callback(pet);
  }, 3000);


  console.log('AFTER CALL', pet); 

  return undefined;
};

// const result = displayLater((pet) => console.log('INSIDE CALL: ', pet));
// console.log(result);
// What is the content of result?

const pet = displayLater((pet) => { return pet});
console.log(pet);