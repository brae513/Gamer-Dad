const fetch = require('node-fetch');


module.exports = {
	name: 'insult',
	description: 'tells a victorian insult.',
	random:true,
	client:false,
	execute(message, args) {
		try{
			fetch("http://quandyfactory.com/insult/json")
				.then(res => res.json())
				.then(json =>{
					//console.log(json);
					if(!message.mentions.members.size){
						message.reply(json.insult);
					}
					else{
						var msg = "";
						message.mentions.members.each(member =>{
							msg= msg+"<@"+member.id+"> ";
						});
						message.channel.send(msg+json.insult);
					}
				});
		} catch (err){
			console.log("Error in insult");
			console.log(err.stack);
		}
	},
};