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
  makeChoice(dungeon.doors);
});

