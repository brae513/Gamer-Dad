

module.exports = {
	name: 'marcsmom',
	description: 'marc\'s mom?',
	random:true,
	client:false,
	execute(message, args) {
		try{
			message.channel.send("https://cdn.discordapp.com/attachments/599851762400362519/813930154673438750/marksmomdies.gif");
		}catch(err){
			console.log(err.stack);
		}
	},
};