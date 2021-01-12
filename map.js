const map = (list, callback) => {
  const outputArr = [];

  for (const element of list) {
    outputArr.push(callback(element));
  }

  return outputArr;
};

const result = map([1, 2, 3], (nb) => nb * nb);
console.log(result);