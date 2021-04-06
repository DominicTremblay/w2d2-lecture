const displayLater = (callback) => {
  console.log('BEFORE CALL: 🐸🐸🐸'); // synchronous

  // setTimout is executed. Synchronous. callback is async (after 3 sec.)
  setTimeout(()=> callback(), 3000); // this is ansynchronous

  console.log('AFTER CALL: 🐹🐹🐹'); // synchronous
};

displayLater(() => console.log('INSIDE CALL: 🐨🐨🐨'))

// What will be the order of the console.logs?

