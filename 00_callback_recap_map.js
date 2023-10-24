// Let's create a map function
// a map function applies a transformation to the elements of an array and returns a new array

const map = (list, callback) => {

  const output = [];

  for (let item of list) {
    output.push(callback(item))
  }

  return output;
  

};


// [1,2,3,4,5] => f(x) => [2,4,6,8,10]

const result = map([1,2,3,4,5], (item) => item * 2 );

console.log(result)
