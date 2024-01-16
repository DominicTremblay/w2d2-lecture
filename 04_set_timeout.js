const displayLater = (callback) => {

  let sushi = '🍣'; // 2
  console.log('BEFORE CALL: ', sushi); // 3

  setTimeout(() => { //4
    sushi = '🐠';
    callback(sushi);
  }, 3000);

  console.log('AFTER CALL', sushi); // 5
};

displayLater((sushi) => console.log('INSIDE CALL: ', sushi)); // 1

// What will be the order of the console.logs? what will it print out?
