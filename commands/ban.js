const fetch = require('node-fetch');


module.exports = {
	name: 'ban',
	description: 'bans someone',
	execute(message, args) {
		try{
			/*if(!message.mentions.members.size){
				message.reply(json.insult);
			}
			else{
				var msg = "";
				message.mentions.members.each(member =>{
					msg= msg+"<@"+member.id+"> ";
				});
				message.channel.send(msg+json.insult);
			}*/
		} catch (err){
			console.log(err.stack);
		}
	},
};