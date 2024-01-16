const displayLater = (callback) => {
  let sushi = '🍣';
  console.log('BEFORE CALL: ', sushi); // 1

  setTimeout(() => { // 4
    sushi = '🐠';
    callback(sushi);
  }, 3000);

  setTimeout(() => { // 3
    sushi = '🐡';
    callback(sushi);
  }, 2000);

  console.log('AFTER CALL', sushi); //2
};

displayLater((sushi) => console.log('INSIDE CALL: ', sushi));

// What will be the order of the console.logs? what will it print out?
