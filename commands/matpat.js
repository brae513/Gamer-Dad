

module.exports = {
	name: 'matpat',
	description: 'something cool',
	random:true,
	client:false,
	execute(message, args) {
		try{
			message.channel.send("https://cdn.discordapp.com/attachments/671036045135183882/813647645264183296/DYIqL8JVwAAzCz6.png");
		}catch(err){
			console.log(err.stack);
		}
	},
};