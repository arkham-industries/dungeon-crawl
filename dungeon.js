// DOORS

const sunDoor = {
  name: 'Sunshine symbol.',
  room: null
};

const obeliskDoor = {
  name: 'Obelisk symbol.',
  room: null
};

const startDoor = {
  name: 'Start door.',
  room: null
};


// ROOMS

const sunRoom = {
  description: 'a bright friendly room.',
  items: [],
  enemies: [],
  doors: [],
};


const obeliskRoom = {
  description: 'a black, oily room.',
  items: [],
  enemies: [],
  doors: [],
};

const startRoom = {
  description: 'a dark murky room.',
  items: [],
  enemies: [],
  doors: [],
};

//Items
const spear = {
  name: 'spear',
  description: 'A rusty spear',
  init: 1,
  damage: 6,
};

const sword = {
  name: 'sword',
  description: 'A shoddy sword',
  init: 0,
  damage: 6,
};

//Enemies
const imp = {
  description: "A winged fiend",
  health: 50,
  ac: 5,
  init: 3,
  toHit: 1,
  damage: 6,
  damageBonus:0,
};

// LINK ROOMS WITH DOORS
startRoom.doors.push(obeliskDoor);
startRoom.doors.push(sunDoor);

sunRoom.doors.push(startDoor);
obeliskRoom.doors.push(startDoor);

// give all doors a room
obeliskDoor.room = obeliskRoom;
sunDoor.room = sunRoom;
startDoor.room = startRoom;

//enemy location
obeliskRoom.enemies.push(imp);

//item location
sunRoom.items.push(spear);
startRoom.items.push(sword);


//console.log(obeliskRoom.enemies)

module.exports = startRoom;
