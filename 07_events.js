const events = require('events');

// Create an eventEmitter object
const eventEmitter = new events.EventEmitter();

// adding events and adding a callback
eventEmitter.on('connect', (event) => {
  console.log('Hello Monkey 🐵');
});

eventEmitter.on('eat', (event) => {
  console.log('I am eating! 🌮🌮🌮');
});

eventEmitter.on('sleep', (event) => {
  console.log('I am sleeping 😴😴😴');
});

eventEmitter.on('repeat', (event) => {
  console.log("Let's do it again! 🔁🔁🔁");
});

const eventNames = ['connect', 'eat', 'sleep', 'repeat'];
let timeout = 1000;

for (let event of eventNames) {
  setTimeout(() => eventEmitter.emit(event), timeout);
  timeout += 1000;
}
