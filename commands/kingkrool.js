const fetch = require('node-fetch');


module.exports = {
	name: 'kingkrool',
	description: 'lizard',
	random:true,
	client:false,
	execute(message, args) {
		try{
			var gifs = [ "https://cdn.discordapp.com/attachments/671036045135183882/812499678549639178/funnylizard.gif",
			"https://cdn.discordapp.com/attachments/671036045135183882/812499680977092688/kingkrool.gif",
			"https://cdn.discordapp.com/attachments/671036045135183882/812499682013216808/lizard1.gif",
			"https://cdn.discordapp.com/attachments/671036045135183882/812499684793778217/sadlizard.gif",
			"https://cdn.discordapp.com/attachments/671036045135183882/812499737906774026/lizard2.gif",
			"https://cdn.discordapp.com/attachments/671036045135183882/812499740893773834/kingkroolvicroy.gif"];
			var selected = Math.floor(Math.random()*gifs.length);
			message.channel.send(gifs[selected]+" look out it's King K Rool!");
		}catch(err){
			console.log(err.stack);
		}
	},
};