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

const startTime = Date.now();

const updateTimer = function (time, ingredient) {
  ingredient.endTime = time;
};

const longestPrepTime = function (ingredients) {
  const prepTimeDesc = ingredients.sort((a, b) => b.prep_time - a.prep_time);
  return prepTimeDesc[0];
};

const areWeDone = function (ingredient, ingredients) {
  if (ingredient.name === longestPrepTime(ingredients).name) {
    const prepTime = ingredient.endTime - startTime;

    console.log(`It took ${prepTime} ms to prepare the ingredients`);
  }
};

const makeSushiRolls = function () {
  for (let ingredient of ingredients) {
    setTimeout(() => {
      // Prepare ingredient
      console.log(ingredient.prep_message);
      // Simulate synchronous delay for ingredient preparation
      // wait(ingredient.prep_time);
      console.log(ingredient.ready_message);
      updateTimer(Date.now(), ingredient);
      areWeDone(ingredient, ingredients);
    }, ingredient.prep_time);
  }
};

makeSushiRolls();
