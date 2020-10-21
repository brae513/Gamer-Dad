const fetch = require('node-fetch');


module.exports = {
	name: 'epic',
	description: 'that\'s epic',
	execute(message, args) {
		try{
			if(message.guild != null && message.guild.id === '599851762400362517'){
				message.guild.emojis.cache.each(emoji=>{
					console.log(emoji.name+":"+emoji.id);
				};
				message.channel.send(message.guild.emojis.cache.get('768315370909859861'));
			}
			}catch(err){
				console.log("Error in joke");
				console.log(err.stack);
			}
	},
};