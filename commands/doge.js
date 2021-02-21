

module.exports = {
	name: 'doge',
	description: 'doge',
	random:true,
	client:false,
	execute(message, args) {
		try{
			if(message.guild != null && message.guild.id === '599851762400362517'){
				message.delete();
				message.channel.send(`${message.guild.emojis.cache.get('699139118826913794')}`);
			}
		}catch(err){
			console.log(err.stack);
		}
	},
};