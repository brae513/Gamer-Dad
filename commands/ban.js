module.exports = {
	name: 'ban',
	description: 'bans someone',
	execute(message, args) {
		try{
			if(message.guild != null && message.guild.id === '599851762400362517'){
				if(!message.mentions.members.size){
					message.channel.send("You need to mention someone for this command.");
				}
				else{
					var targets = 0;
					message.mentions.members.each(member =>{
						var found = true;
						console.log(member.voice);
						if(found){
							targets += 1;
							member.voice.setChannel('606679114564239361');
						}
					});
					if(targets === 0){
						message.channel.send("User not in a voice call");
					}
				}
			}

			/*if(!message.mentions.members.size){
				message.reply(json.insult);
			}
			else{
				var msg = "";
				message.mentions.members.each(member =>{
					msg= msg+"<@"+member.id+"> ";
				});
				message.channel.send(msg+json.insult);
			}*/
		} catch (err){
			console.log(err.stack);
		}
	},
};