const fetch = require('node-fetch');


module.exports = {
	name: 'korone',
	description: 'korone',
	execute(message, args) {
		try{
			message.channel.send("https://tenor.com/view/inugami-korone-holo-live-fortnite-dance-meme-gif-17034919");
		}catch(err){
			console.log(err.stack);
		}
	},
};