const fetch = require('node-fetch');
const profile = require('../utils/profile.js');

module.exports = {
	name: 'balance',
	description: 'Shows a user\'s diego bucks balance',
	execute(message, args) {
		try{
			
			message.channel.send(profile.getDiegoBucks(message.author.id));
			
		}catch(err){
			console.log(err.stack);
		}
	},
};