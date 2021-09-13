const fetch = require('node-fetch');


module.exports = {
	name: 'unfunnydog',
	description: 'funny dog :DDDDDD',
	random:true,
	client:false,
	execute(message, args) {
		try{
			var gifs = [ "https://tenor.com/view/korone-pet-pet-gif-18248733",
					"https://tenor.com/view/inugami-korone-hololive-thinking-anime-confused-gif-17902545",
					"https://tenor.com/view/inugami-korone-gif-18362148",
					"https://tenor.com/view/inugamikorone-korone-koronelfr-lfrhahaha-gif-18833720",
					"https://tenor.com/view/korone-hololive-inugami-korone-smile-dancing-gif-17703887",
					"https://tenor.com/view/inugami-korone-holo-live-fortnite-dance-meme-gif-17034919",
					"https://tenor.com/view/no-no-no-yes-korone-anime-no-anime-yes-gif-18621939",
                    "https://cdn.discordapp.com/attachments/872704859823026186/886772636498137168/37FB85B6-0DBE-4EAE-BFD8-DB523DD9F950_1_201_a.jpeg",
                    "https://cdn.discordapp.com/attachments/872704859823026186/886703381626904646/image0.jpg",
                    "https://cdn.discordapp.com/attachments/599851762400362519/886131368671731732/image0.jpg",
                    "https://media.discordapp.net/attachments/872704859823026186/885393643987406848/image0.png",
                    "https://cdn.discordapp.com/attachments/872704859823026186/885360975535018044/image0.jpg",
                    "https://tenor.com/view/wokay-walter-walter-dog-get-walterd-lol-get-waltered-gif-19284899",
                    "https://cdn.discordapp.com/attachments/872704859823026186/885290842997276703/image0.png",
                    "https://tenor.com/view/borzoi-hh-gif-22579740",
                    "https://tenor.com/view/doge-dogs-dog-car-driving-gif-16609923",
                    "https://tenor.com/view/walter-bull-terrier-dog-pet-gif-16763384",
                    "https://cdn.discordapp.com/attachments/872704859823026186/883593904895709204/image1.png",
					"https://tenor.com/view/korone-inugami-hololive-inugami-korone-doggo-gif-17711372"];
			var selected = Math.floor(Math.random()*gifs.length);
			message.channel.send(gifs[selected]);
		}catch(err){
			console.log(err.stack);
		}
	},
};