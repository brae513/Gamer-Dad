

module.exports = {
	name: 'brae',
	description: 'It\'s coding time',
	random:true,
	client:false,
	execute(message, args) {
		try{
			message.channel.send("https://tenor.com/view/hacker-pc-meme-matrix-codes-gif-16730883");
			message.channel.send("It\'s coding time");
		}catch(err){
			console.log(err.stack);
		}
	},
};