const displayLater = (callback) => {
  console.log('BEFORE CALL: 🐸🐸🐸'); // synchronous

  // setTimout is executed. Synchronous. callback is async (after 3 sec.)
  setTimeout(()=> callback(), 0); // this is ansynchronous

  console.log('AFTER CALL: 🐹🐹🐹'); // synchronous
};

displayLater(() => console.log('INSIDE CALL: 🐨🐨🐨'))

// What will be the order of the console.logs?

// Async way:
// 1- 'BEFORE CALL: 🐸🐸🐸' Line 2
// 2- 'AFTER CALL: 🐹🐹🐹' Line 7
// 3- 'INSIDE CALL: 🐨🐨🐨' Line 10

//Sync way:
// 1- 'BEFORE CALL: 🐸🐸🐸' Line 2
// 2- 'INSIDE CALL: 🐨🐨🐨' Line 10
// 3- 'AFTER CALL: 🐹🐹🐹' Line 7