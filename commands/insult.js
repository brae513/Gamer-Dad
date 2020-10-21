const fetch = require('node-fetch');


module.exports = {
	name: 'insult',
	description: 'tells a victorian insult.',
	execute(message, args) {
		try{
			fetch(insultSite)
				.then(res => res.json())
				.then(json =>{
					console.log(json);
					if(!message.mentions.users.size){
						message.reply(json.insult);
					}
					else{
						var msg = "";
						message.mentions.each(member =>{
							msg= msg+"<@"+member.id+"> ";
						});
						message.reply(msg+json.insult);
					}
				});
		} catch (err){
			console.log("Error in insult");
			console.log(err.stack);
		}
	},
};