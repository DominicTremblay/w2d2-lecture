const displayLater = (callback) => {

  // const callback = () => console.log('INSIDE CALL: 🐨🐨🐨');


  console.log('BEFORE CALL: 🐸🐸🐸'); // synchronous

  // setTimout is executed. Synchronous. callback is async (after 3 sec.)
  setTimeout(()=> {
  
    let author = { name: 'Ernest Hemingway'};

    callback(author);
  
  
  }, 3000); // this is ansynchronous


  // console.log(author);


  console.log('AFTER CALL: 🐹🐹🐹'); // synchronous
};

displayLater((authorObj) => console.log(authorObj));

// displayLater(() => console.log('INSIDE CALL: 🐨🐨🐨'))

// What will be the order of the console.logs?

// 1. 'BEFORE CALL: 🐸🐸🐸' // in an instant
// 2. 'AFTER CALL: 🐹🐹🐹' // in an instant
// 3. 'INSIDE CALL: 🐨🐨🐨' // print out after 3 seconds