const fetch = require('node-fetch');


module.exports = {
	name: 'status',
	description: 'randomizes the bot\'s status',
	random:true,
	client:true,
	execute(client, message, args) {
		try{
			var people = [ "Diego","Kaleb","Smeag","Race","Marc","Brae","Erick","Joeboi"];
			var games = [ "tic tac toe","minesweeper","rock paper scissors"];
			var person = people[Math.floor(Math.random()*people.length)];
			var game = games[Math.floor(Math.random()*games.length)];
			client.user.setPresence({
				status: "online",  //You can show online, idle....
				activity: {
					name: game+" against "+person+" and crushing them",  //The message shown
					type: "PLAYING" //PLAYING: WATCHING: LISTENING: STREAMING:
				}
			}).then(pres=>console.log(pres));
		}catch(err){
			console.log(err.stack);
		}
	},
};