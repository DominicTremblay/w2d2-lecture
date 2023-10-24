// Use a setTimeout with a callback to display a message after 3 sec.
// Create a function displayLater that uses a callback fct
// that display `Thank you for shopping at Bob's sushis 🍣`

const displayLater = (callback) => {

  // have the operation take 3 secs to accomplish
  setTimeout(() => {

    callback();

  }, 3000)

};
displayLater(() => console.log(`Thank you for shopping at Bob's sushis 🍣`));
