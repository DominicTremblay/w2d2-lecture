const numbers = [900, 310, 1006, 0, 2, 3630, 1, 52, 603, 59, 81];

const sleep = function (nums) {

  for (let num of nums) {
    setTimeout(() => console.log(num), num)
  }

};

sleep(numbers);
