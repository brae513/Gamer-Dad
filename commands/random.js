const fs = require('fs');

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const commands = [];

for (const file of commandFiles) {
	const command = require(`./${file}`);
	if(command.random==true){
		commands.push(command);
		console.log(command.name);
	}
}
/*const commandNames = ['joke','korone','insult','epic','rtx','deafen','loshomies','newyears','cat'];
for (const name of commandNames) {
	const command = require('./'+name+'.js');
	commands.push(command);
}*/

module.exports = {
	name: 'random',
	description: 'picks a random command',
	random:false,
	client:false,
	execute(message, args) {
		try{
			var selected = Math.floor(Math.random()*commands.length);
			commands[selected].execute(message,args);
			
		}catch(err){
			console.log(err.stack);
		}
	},
};

//commands[7].execute();