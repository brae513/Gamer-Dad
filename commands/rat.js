const fetch = require('node-fetch');


module.exports = {
	name: 'rat',
	description: 'rat',
	random:true,
	client:false,
	execute(message, args) {
		try{
			var gifs = [ "https://media.discordapp.net/attachments/738595477108555807/741148403677003776/741148295841185822.gif",
					"https://cdn.discordapp.com/attachments/367834588753690655/820992195317989386/video0.mp4",
					"https://cdn.discordapp.com/attachments/796384999658094653/819032541298163712/RatGone-1.mp4",
					"https://media.discordapp.net/attachments/130202706936725504/740816170822664232/1589148221901-1.gif"];
			var selected = Math.floor(Math.random()*gifs.length);
			message.channel.send(gifs[selected]);
		}catch(err){
			console.log(err.stack);
		}
	},
};