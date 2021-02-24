const fs = require('fs');

const commandDir = '../commands';
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const commands = [];
const randCommands = [];

function init(){
	commands = [];
	randCommands = [];
	for (const file of commandFiles) {
		const command = require(commandDir+`/${file}`);
		//console.log(command.name);
		commands.push(command);
		if(command.random==true){
			randCommands.push(command);
		}
	}
}

function getCommands(){
	return commands;
}

function getRand(){
	return randCommands;
}

module.exports = {
	getCommands,
	getRand,
	init
	//getDescriptions
};
//var cnt = getDiegoBucks("tester");
//console.log(cnt);
