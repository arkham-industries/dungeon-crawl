//test if we can do this or not

const prompts = require('prompts');

const promptConfig = {
  type: 'multiselect',
  name: 'value',
  message: 'what is your favorite?',
  choices: ['red', 'green', 'blue'],
  max: 1
};

module.exports = promptConfig;
