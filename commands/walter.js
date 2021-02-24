

module.exports = {
	name: 'walter',
	description: 'shake',
	random:true,
	client:false,
	execute(message, args) {
		try{
			if(message.guild != null && message.guild.id === '599851762400362517'){
				message.delete();
				message.channel.send('https://tenor.com/view/walter-bull-terrier-dog-pet-gif-16763384');
			}
		}catch(err){
			console.log(err.stack);
		}
	},
};