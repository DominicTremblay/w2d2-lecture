// Use a setTimeout with a callback to display a message after 3 sec.
// Create a function displayLater that uses a callback fct
// that display `Thank you for shopping at Bob's sushis 🍣`

const displayLater = (callback) => {

  setTimeout(() => {
    callback();
  }, 3000)


};
displayLater(() => console.log(`Thank you for shopping at Bob's sushis 🍣`));

console.log(`Thank you for waiting for your sushi to be ready!`)
