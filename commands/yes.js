

module.exports = {
	name: 'yes',
	description: 'yes',
	random:true,
	client:false,
	execute(message, args) {
		try{
			if(message.guild != null && message.guild.id === '599851762400362517'){
				message.delete();
				message.channel.send(`yes`);
			}
		}catch(err){
			console.log(err.stack);
		}
	},
};