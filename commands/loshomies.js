const fetch = require('node-fetch');

module.exports = {
	name: 'loshomies',
	description: 'Los Homies',
	execute(message, args) {
		try{
			message.channel.send("https://media.discordapp.net/attachments/704506663360659557/744431752721858630/unknown.png?width=400&height=172");
						
		}catch(err){
			console.log(err.stack);
		}
	},
};