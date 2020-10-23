const fetch = require('node-fetch');


module.exports = {
	name: 'korone',
	description: 'korone',
	execute(message, args) {
		try{
			var gifs = [ "https://tenor.com/view/korone-pet-pet-gif-18248733",
					"https://tenor.com/view/inugami-korone-hololive-thinking-anime-confused-gif-17902545",
					"https://tenor.com/view/inugami-korone-gif-18362148",
					"https://tenor.com/view/korone-hololive-inugami-korone-smile-dancing-gif-17703887",
					"https://tenor.com/view/inugami-korone-holo-live-fortnite-dance-meme-gif-17034919"];
			console.log(gifs.length);
			console.log(Math.random()*gifs.length);
			var selected = Math.floor(Math.random()*gifs.length);
			console.log(selected);
			message.channel.send(gifs[selected]);
		}catch(err){
			console.log(err.stack);
		}
	},
};