const fetch = require('node-fetch');
const rtx = false;

module.exports = {
	name: 'rtx',
	description: 'turns rtx on',
	execute(message, args) {
		try{
			if(!rtx){
				message.channel.send("RTX on\n https://cdn.discordapp.com/attachments/618845562262913066/770403899605385256/mr-incredible.png");
				
			}
			else{
				message.channel.send("RTX off\n https://cdn.discordapp.com/attachments/706003822601961502/768301698295791616/ffngdij9nv851.png");
			}
			rtx=!rtx;
						
		}catch(err){
			console.log(err.stack);
		}
	},
};