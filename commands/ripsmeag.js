

module.exports = {
	name: 'ripsmeag',
	description: 'RIP',
	random:true,
	client:false,
	execute(message, args) {
		try{
			message.channel.send("https://cdn.discordapp.com/attachments/804981113437159474/854573486210416660/ripsmeag.jpg");
		}catch(err){
			console.log(err.stack);
		}
	},
};