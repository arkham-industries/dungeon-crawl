const prompts = require('prompts');
const dungeon = require('./dungeon.js');
const makeChoice = require('./make-choice.js');

const player = {
  name: 'unknown',
  health: 100,
  weapon: 'sword'
};

const promptConfig = {
  type: 'text',
  name: 'value',
  message: 'What is your name?'
};

prompts(promptConfig)
.then((response)=>{

  // options menu
  player.name = response.value;
  console.log(player)

  //start dungeon
  console.log(`${player.name} enters `, dungeon.description);

  makeChoice(dungeon.doors)
  .then((response) => {
    // response is an array of choices, we limit the choices to 1
    if (response.value.length !== 0) {
      console.log(`${player.name} enters `, response.value[0].description);
    } else {
      console.error('choice invalid!');
    }
  });

});

