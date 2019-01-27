const room3 = {
  description: 'An black, oily statue.',
  items: [],
  enemies: [],
  doors: [],
};


const room2 = {
  description: 'A bright friendly room.',
  items: [],
  enemies: [],
  doors: [],
};

const room1 = {
  description: 'A dark murky room.',
  items: [],
  enemies: [],
  doors: [
  {
    name: 'Sunshine symbol.',
    room: room2
  },
  {
    name: 'An Obelisk',
    room: room3
  }],
};


module.exports = room1;
