

module.exports = {
	name: 'random',
	description: 'picks a random command',
	execute(message, args) {
		try{
			var commandNames = ['joke','korone','insult','epic','rtx','deafen','loshomies','newyears','cat'];
			var selected = Math.floor(Math.random()*commandNames.length);
			const command = require(commandNames[selected]+'.js');
			command.execute(message,args);
			
		}catch(err){
			console.log(err.stack);
		}
	},
};