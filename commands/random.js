
			
const commandNames = ['joke','korone','insult','epic','rtx','deafen','loshomies','newyears','cat'];
const commands = [];
for (const name of commandNames) {
	const command = require('./'+name+'.js');
	commands.push(command);
}

module.exports = {
	name: 'random',
	description: 'picks a random command',
	execute(message, args) {
		try{
			var selected = Math.floor(Math.random()*commands.length);
			commands[selected].execute(message,args);
			
		}catch(err){
			console.log(err.stack);
		}
	},
};

