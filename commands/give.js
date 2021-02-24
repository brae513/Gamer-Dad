const fetch = require('node-fetch');
const fs = require('fs');

module.exports = {
	name: 'give',
	description: 'give\'s diego bucks to the target',
	random:false,
	client:false,
	execute(message, args) {
		try{
			if(args.length!=2){
				message.channel.send("Incorrect syntax:\nCorrect syntax: !give person amount");
			}
			else{
				console.log(args);
				var target = args[1];
				var amt = args[2];
				console.log(target);
			}
		}catch(err){
			console.log(err.stack);
		}
	},
};