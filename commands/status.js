const fetch = require('node-fetch');


module.exports = {
	name: 'status',
	description: 'randomizes the bot\'s status',
	execute(message, args) {
		try{
			var people = [ "diego","caleb","smeag","race","marc","brae","erick","joe"];
			var games = [ "tic tac toe","minesweeper","rock paper scissors"];
			var person = people[Math.floor(Math.random()*people.length)];
			var game = games[Math.floor(Math.random()*games.length)];
			//var msg = game+" against "+person+" and crushing them";
			client.user.setPresence({
				status: "online",  //You can show online, idle....
				game: {
					name: game+" against "+person+" and crushing them",  //The message shown
					type: "PLAYING" //PLAYING: WATCHING: LISTENING: STREAMING:
				}
			});
			var selected = Math.floor(Math.random()*gifs.length);
			message.channel.send(gifs[selected]);
		}catch(err){
			console.log(err.stack);
		}
	},
};