const fetch = require('node-fetch');

module.exports = {
	name: 'loshomies',
	description: 'Los Homies',
	random:true,
	client:false,
	execute(message, args) {
		try{
			if(Math.random()>0.5){
				message.channel.send("https://cdn.discordapp.com/attachments/599851762400362519/787831295501402122/christmas_pic.png");
			}
			else{
				message.channel.send("https://media.discordapp.net/attachments/704506663360659557/744431752721858630/unknown.png?width=400&height=172");
			}		
		}catch(err){
			console.log(err.stack);
		}
	},
};