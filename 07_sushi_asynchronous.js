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

const longestTimeIng = ingredients.sort((ing1, ing2) => ing2 - ing1)[0];

// starting the timer
const startTime = Date.now();

const longestPrepTime = ingredients.sort((ing1, ing2) => ing2.prep_time - ing1.prep_time)[0];


// Prepare all the ingredients asynchronously
const makeSushiRolls = function (ingredients) {

  // let totalTime = 0;

  for (let ingredient of ingredients) {
    console.log(ingredient.prep_message);

    setTimeout(() => {
      console.log(ingredient.ready_message);
      // totalTime += ingredient.prep_time;

      if(longestPrepTime.name === ingredient.name) {
        console.log(`it took ${Date.now() - startTime} ms`)
      }
    }, ingredient.prep_time);




  }

  // console.log("total:", totalTime);
};

makeSushiRolls(ingredients);
