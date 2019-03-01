
/*const prompts = require('prompts');

module.exports = (item) => {

  /*const choices = [];
  for(let i=0; i<item.length; i++) {
    const choice = {
      title: item[i].name,
      value: item[i].damage
    };
    choices.push(choice);
  }

  const promptConfig = {
    type: 'multiselect',
    name: 'value',
    message: `do you want to pick up the ${item.name}?`,
    choices:[
      {title:`Leave the ${item.name}`, value: 1},
      {title:`Pick up the ${item.name}`, value: 1}],
    max: 1
  };

//console.log(promptConfig);
  return prompts(promptConfig);
}


const prompts = require('prompts');

const promptConfig = {
  type: 'multiselect',
  name: 'value',
  message: 'Do you want to pick up the spear?',
  choices: ['pick up the spear', 'leave it'],
  max: 1
};

module.exports = promptConfig;
*/
module.exports = (item) =>{
   const promptConfig ={
  type: 'multiselect',
  name: 'value',
  message: `Do you want to pick up the ` + item +'?',
  choices: ['pick up the '+ item, 'leave the '+ item],
  max: 1
   }
   return promptConfig
}
