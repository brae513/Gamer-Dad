const commandUtil = require("../utils/commandUtil");
/*const commandNames = ['joke','korone','insult','epic','rtx','deafen','loshomies','newyears','cat'];
for (const name of commandNames) {
	const command = require('./'+name+'.js');
	commands.push(command);
}*/

module.exports = {
	name: 'random',
	description: 'picks a random command',
	random:false,
	client:true,
	execute(client, message, args) {
		try{
			var commands = commandUtil.getRand();
			var selected = Math.floor(Math.random()*commands.length);
			commands[selected].execute(message,args);
			
		}catch(err){
			console.log(err.stack);
		}
	},
};

//commands[7].execute();