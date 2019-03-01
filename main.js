const prompts = require('prompts');
const dungeon = require('./dungeon.js');
const makeChoice = require('./make-choice.js');
const pickItem = require('./item_choice.js');
const testPrompt = require('./textPrompt.js');

const player = {
  name: 'unknown',
  health: 100,
  inventory: [],
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
  chooseRoom(dungeon);
});

const chooseRoom = (room) => {
//response.value[0].items are items in the room
//response.value[0].doors are doors in room
  makeChoice(room.doors).then((roomResponse) => {
    const currentRoom = roomResponse.value[0];
    // response is an array of choices, we limit the choices to 1
    if (roomResponse.value.length !== 0) {
      console.log(`${player.name} enters `, currentRoom.description);
      //checkEnemiesInRoom(response.value[0]);
      checkItemsInRoom(currentRoom).then((itemResponse) => {
        chooseRoom(currentRoom);
      })
    } else {
      console.error('choice invalid!');
    }
  });

}


function checkItemsInRoom(room) {
  if (room.items.length !== 0) {
    const itemIndex = 0;
    const item = room.items[itemIndex];
    console.log(`A ` + item.name + ` lies in the corner of the room.` )
    return prompts(pickItem(item.name))
    .then((response) => {
      if (response.value[0] === ('pick up the ' + item.name)) {
        console.log('You pick up the ' + item.name)
        player.inventory.push(item);
        room.items.splice(itemIndex, 1);
        console.log('Your inventory now contains:', player.inventory);
        console.log('The room now contains these items:', room.items);
        return item;
      } else {
        console.log("You don't pick up the " + item.name)
      }
    })
  } else {
    console.log('Nothing appears to be in the room.')
    return Promise.resolve(); //google later (pauses and returns later)
  }
}

//checkItemsInRoom(dungeon);

function checkEnemiesInRoom(room) {
  if (room.enemies.length !== 0){
    console.log(room.enemies[0].description + ' attacks you!')
    //combatFunction
  }
}
