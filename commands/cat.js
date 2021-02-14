

module.exports = {
	name: 'cat',
	description: 'cat',
	execute(message, args) {
		try{
				message.channel.send(`https://cdn.discordapp.com/attachments/367834588753690655/810615657682698280/image1254.png https://cdn.discordapp.com/attachments/367834588753690655/810615658030301244/image2-10.png https://cdn.discordapp.com/attachments/367834588753690655/810615658273439834/image3-4.png https://cdn.discordapp.com/attachments/367834588753690655/810615658529161296/image4-4.png`);
		}catch(err){
			console.log(err.stack);
		}
	},
};