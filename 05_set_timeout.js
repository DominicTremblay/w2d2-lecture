const displayLater = (callback) => {
  let sushi = '🍣';
  console.log('BEFORE CALL: ', sushi);

  setTimeout(() => {
    sushi = '🐠';
    callback(sushi);
    return 'Done';
  }, 3000);

  console.log('AFTER CALL', sushi);
  return;
};
// What is the content of result?

const result = displayLater((sushi) => console.log('INSIDE CALL: ', sushi));
console.log(result);
