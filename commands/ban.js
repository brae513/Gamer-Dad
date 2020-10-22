module.exports = {
	name: 'ban',
	description: 'bans someone',
	execute(message, args) {
		try{
			if(message.guild != null && message.guild.id === '599851762400362517'){
				var guild = message.guild;
				var hasPerm = false;
				var gMem = guild.members.fetch(message.author);
				console.log(gMem);
				console.log(gMem.permissions);
				hasPerm = (0x01000000 & gMem.permissions)

				if(!message.mentions.members.size){
					message.channel.send("You need to mention someone for this command.");
				}
				else if(hasPerm == false){
					message.channel.send("No");
				}
				else{
					var targets = 0;
					message.mentions.members.each(member =>{
						// TODO: make it actually check instead of just landing in the try catch
						targets += 1;
						member.voice.setChannel('606679114564239361');
					});
					if(targets === 0){
						message.channel.send("User not in a voice call");
					}
				}
			}
		} catch (err){
			console.log(err.stack);
		}
	},
};