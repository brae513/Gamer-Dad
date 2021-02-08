const fetch = require('node-fetch');
const profile = require('../utils/profile.js');

module.exports = {
	name: 'print',
	description: 'give\'s diego bucks to the user',
	execute(message, args) {
		try{
			
			if(message.author.id == '161975669834776576' || message.author.id =='378445325351780366'){
				if(args.length!=1){
					message.channel.send("Incorrect syntax\nCorrect syntax: !print (amt)");
				}
				profile.addDiegoBucks(message.author.id,args[0]);
			}
			else{
				message.channel.send("You can't print the epic currency");
			}
			
		}catch(err){
			console.log(err.stack);
		}
	},
};