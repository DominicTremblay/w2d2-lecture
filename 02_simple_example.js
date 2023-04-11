// Use a setTimeout with a callback to display a message after 3 sec.
// Create a function displayLater that uses a callback fct

const displayLater = (callback) => {
  setTimeout(() => {
    callback();
  }, 3000);
};
displayLater(() => console.log(`Thank you for shopping at Bob's sushis 🍣`));
