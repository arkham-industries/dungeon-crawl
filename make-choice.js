const prompts = require('prompts');

module.exports = (doors) => {

  const choices = [];
  for(let i=0; i<doors.length; i++) {
    const choice = {
      title: doors[i].name,
      value: doors[i].room
    };
    choices.push(choice);
  }

  const promptConfig = {
    type: 'multiselect',
    name: 'value',
    message: 'Where do you want to go?',
    choices: choices
  };

  return prompts(promptConfig);
}