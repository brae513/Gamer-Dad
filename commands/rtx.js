const fetch = require('node-fetch');
const rtx = false;

module.exports = {
	name: 'rtx',
	description: 'turns rtx on',
	execute(message, args) {
		try{
			if(!rtx){
				message.channel.send("RTX on");
			}
			else{
				message.channel.send("RTX off");
			}
			rtx=!rtx;
						
		}catch(err){
			console.log(err.stack);
		}
	},
};