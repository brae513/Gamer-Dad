

module.exports = {
	name: 'matpat',
	description: 'something cool',
	random:true,
	client:false,
	execute(message, args) {
		try{
			message.channel.send("https://cdn.discordapp.com/attachments/671036045135183882/814045111062233128/makesweet_1.gif");
		}catch(err){
			console.log(err.stack);
		}
	},
};