const fetch = require('node-fetch');
const profile = require('../utils/profile.js');

module.exports = {
	name: 'balance',
	description: 'Shows a user\'s diego bucks balance',
	execute(message, args) {
		try{
			var cnt = profile.getDiegoBucks(message.author.id);
			message.channel.send(profile.getDiegoBucks(cnt));
			
		}catch(err){
			console.log(err.stack);
		}
	},
};