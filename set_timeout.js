const example1 = () => {
  console.log('BEFORE CALL'); // synchronous

  setTimeout(() => console.log('INSIDE CALL'), 1000); // setTimout is executed. Synchronous. callback is async

  console.log('AFTER CALL'); // synchronous
};

// example1();



const example2 = () => {
  let x = 1; // sync
  console.log('BEFORE CALL: ', x); //sync

  setTimeout(() => { // go sit on the bench
    x = 2;
    console.log('INSIDE CALL: ', x);
  }, 1000);

  setTimeout(() => console.log('second set timeout'), 0);

  console.log('AFTER CALL', x); // sync
};

example2();

