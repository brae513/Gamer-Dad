const commandUtil = require("../utils/commandUtil");

module.exports = {
	name: 'random',
	description: 'picks a random command',
	random:false,
	client:true,
	execute(client, message, args) {
		try{
			var commands = commandUtil.getRand();
			var selected = Math.floor(Math.random()*commands.length);
			console.log(commands[selected]);
			commands[selected].execute(message,args);
			
		}catch(err){
			console.log(err.stack);
		}
	},
};

