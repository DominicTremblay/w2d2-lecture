const displayLater = (callback) => {
  let sushi = '🍣';
  console.log('BEFORE CALL: ', sushi);

  setTimeout(() => {
    sushi = '🐠';
    callback(sushi);
  }, 3000);

  setTimeout(() => {
    sushi = '🐡';
    callback(sushi);
  }, 2000);

  console.log('AFTER CALL', sushi);
};

displayLater((sushi) => console.log('INSIDE CALL: ', sushi));

// What will be the order of the console.logs? what will it print out?
