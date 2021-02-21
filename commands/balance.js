const fetch = require('node-fetch');
const profile = require('../utils/profile.js');

module.exports = {
	name: 'balance',
	description: 'Shows a user\'s diego bucks balance (doesnt work obv)',
	random:false,
	client:false,
	execute(message, args) {
		try{
			var cnt = profile.getDiegoBucks(message.author.id);
			message.channel.send("You have "+cnt+" Diego bucks");
			
		}catch(err){
			console.log(err.stack);
		}
	},
};