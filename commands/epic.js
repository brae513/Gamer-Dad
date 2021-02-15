

module.exports = {
	name: 'epic',
	description: 'that\'s epic',
	random:true,
	client:false,
	execute(message, args) {
		try{
			if(message.guild != null && message.guild.id === '599851762400362517'){
				message.delete();
				message.channel.send(`${message.guild.emojis.cache.get('749519699062292540')}`);
			}
		}catch(err){
			console.log(err.stack);
		}
	},
};