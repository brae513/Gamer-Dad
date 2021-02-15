const fetch = require('node-fetch');
const rtx = false;

module.exports = {
	name: 'rtx',
	description: 'turns rtx on',
	random:true,
	client:false,
	execute(message, args) {
		try{
			if(Math.random()>0.5){
				message.channel.send("RTX on\n https://cdn.discordapp.com/attachments/618845562262913066/770403899605385256/mr-incredible.png");
				
			}
			else{
				message.channel.send("RTX on\n https://www.youtube.com/watch?v=Z7Rj9mHj79E");
			}
			rtx=!rtx;
						
		}catch(err){
			console.log(err.stack);
		}
	},
};