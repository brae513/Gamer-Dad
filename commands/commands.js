const commandUtil = require("../utils/commandUtil.js");


module.exports = {
	name: 'commands',
	description: 'Looks at available commands',
	random:true,
	client:false,
	execute(message, args) {
		try{
			var commands = commandUtil.getCommands();
			var msg = "Commands:";
			for(i=0;i<commands.length;i++){
				msg+="\n"+commands[i].name+" :\t"+commands[i].description;
			}
			message.channel.send(msg);
		}catch(err){
			console.log("Error in commands");
			console.log(err.stack);
		}
	},
};