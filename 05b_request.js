const request = require('request');

const displayLater = (callback) => {
  let sushi = '🍣';
  console.log('BEFORE CALL: ', sushi);

  request('https://jsonplaceholder.typicode.com/todos/1', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });

  console.log('AFTER CALL', sushi);
  c
  return;
};
// What is the content of result?

const result = displayLater((sushi) => console.log('INSIDE CALL: ', sushi));
console.log(result);
