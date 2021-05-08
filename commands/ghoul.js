const fetch = require('node-fetch');


module.exports = {
	name: 'ghoul',
	description: 'ghoul',
	random:true,
	client:false,
	execute(message, args) {
		try{
			var gifs = ["https://cdn.discordapp.com/attachments/730220776715976756/839247027559727114/ghoulportraitframe1.gif",
						"https://cdn.discordapp.com/attachments/163303237129207808/840386005890236416/unknown.png",
						"https://cdn.discordapp.com/attachments/757798205017555044/840390978321514526/unknown.png"];
			var selected = Math.floor(Math.random()*gifs.length);
			message.channel.send(gifs[selected]);
		}catch(err){
			console.log(err.stack);
		}
	},
};