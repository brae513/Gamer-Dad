const fetch = require('node-fetch');


module.exports = {
	name: 'korone',
	description: 'korone',
	execute(message, args) {
		try{
			var gifs = [ "https://tenor.com/view/korone-pet-pet-gif-18248733",
					"https://tenor.com/view/inugami-korone-hololive-thinking-anime-confused-gif-17902545",
					"https://tenor.com/view/inugami-korone-gif-18362148",
					"https://tenor.com/view/inugamikorone-korone-koronelfr-lfrhahaha-gif-18833720",
					"https://tenor.com/view/korone-hololive-inugami-korone-smile-dancing-gif-17703887",
					"https://tenor.com/view/inugami-korone-holo-live-fortnite-dance-meme-gif-17034919"];
			var selected = Math.floor(Math.random()*gifs.length);
			message.channel.send(gifs[selected]);
		}catch(err){
			console.log(err.stack);
		}
	},
};