const commandUtil = require("../utils/commandUtil");


module.exports = {
	name: 'commands',
	description: 'Looks at available commands',
	random:true,
	client:false,
	execute(message, args) {
		try{
			var commands = commandUtil.getRand();
			var msg = "Commands:";
			for(i=0;i<commands.length;i++){
				msg+="\n"+commands[i].name+":"+commands[i].description;
			}
			message.channel.send(msg);
		}catch(err){
			console.log("Error in joke");
			console.log(err.stack);
		}
	},
};