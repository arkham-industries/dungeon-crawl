// DOORS

const sunDoor = {
  name: 'Sunshine symbol.',
  room: null
};

const obliskDoor = {
  name: 'Obelisk symbol.',
  room: null
};

const startDoor = {
  name: 'Start door.',
  room: null
};


// ROOMS

const sunRoom = {
  description: 'A bright friendly room.',
  items: [],
  enemies: [],
  doors: [],
};


const obeliskRoom = {
  description: 'An black, oily room.',
  items: [],
  enemies: [],
  doors: [],
};

const startRoom = {
  description: 'A dark murky room.',
  items: [],
  enemies: [],
  doors: [],
};

// LINK ROOMS WITH DOORS
startRoom.doors.push(obliskDoor);
startRoom.doors.push(sunDoor);

sunRoom.doors.push(startDoor);
obeliskRoom.doors.push(startDoor);

// give all doors a room
obliskDoor.room = obeliskRoom;
sunDoor.room = sunRoom;
startDoor.room = startRoom;

module.exports = startRoom;
