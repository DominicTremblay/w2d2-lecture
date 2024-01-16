// Sushi ingredients
const ingredients = [
  {
    name: 'cooked rice',
    prep_time: 2000,
    prep_message: 'Preparing rice...',
    ready_message: 'Rice is ready!',
  },
  {
    name: 'seaweed',
    prep_time: 1000,
    prep_message: 'Preparing nori...',
    ready_message: 'Nori is ready!',
  },
  {
    name: 'fresh fish',
    prep_time: 1500,
    prep_message: 'Preparing fish...',
    ready_message: 'Fish is ready!',
  },
  {
    name: 'crunchy vegetables',
    prep_time: 1000,
    prep_message: 'Preparing vegetables...',
    ready_message: 'Vegetables are ready!',
  },
  {
    name: 'tasty sauce',
    prep_time: 500,
    prep_message: 'Preparing sauce...',
    ready_message: 'Sauce is ready!',
  },
];

// Starting the timer
const startTime = Date.now();

// helper function to simulate a waiting time
const wait = function (ms) {
  console.log(`It takes ${ms} miliseconds to prepare`);
  const start = new Date().getTime();
  while (new Date().getTime() - start < ms);
};

const makeSushiRollsSync = function (ingredients) {
  for (let ingredient of ingredients) {
    console.log(ingredient.prep_message);

    console.log(ingredient.prep_message);
    wait(ingredient.prep_time);

    console.log(ingredient.ready_message);
  }

  console.log(`it took ${Date.now() - startTime} ms`);
};

makeSushiRollsSync(ingredients);
