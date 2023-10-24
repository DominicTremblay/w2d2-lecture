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

const longestTime = function (ingredients) {
  return ingredients.sort((ing1, ing2) => ing2.prep_time - ing1.prep_time)[0];
};

// starting the timer
const startTime = Date.now();

// Prepare all the ingredients asynchronously
const makeSushiRolls = function (ingredients) {
  for (let ingredient of ingredients) {
    console.log(ingredient.prep_message);

    setTimeout(() => {
      console.log(ingredient.ready_message);

      if (ingredient.name === longestTime(ingredients).name) {
        console.log(`It took ${Date.now() - startTime} milliseconds`);
      }
    }, ingredient.prep_time);
  }
};

makeSushiRolls(ingredients);
