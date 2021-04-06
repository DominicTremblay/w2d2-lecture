// Use a setTimeout with a callback to display a message after 3 sec.
// Create a function displayLater that uses a callback fct

const displayLater = (callback) => {

  setTimeout(() => {
    // inside here is going to be triggered after the delau
    // asynchronous flow here
    callback();
    
    }, 3000);


}

displayLater(() => console.log("Hello Bob!"));

