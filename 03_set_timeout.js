const displayLater = (callback) => {
  console.log('BEFORE CALL: 🐟🍚');


  // setTimeout(()=> callback(), 3000); 

  console.log('AFTER CALL: 🍣🍣🍣');
};

displayLater(() => console.log('INSIDE CALL: 🥵'))

// What will be the order of the console.logs?

