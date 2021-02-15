module.exports = {
	name: 'ban',
	description: 'bans someone',
	random:true,
	client:false,
	execute(message, args) {
		try{
		//Diego might be epic
			if(message.guild != null && message.guild.id === '599851762400362517'){
				var guild = message.guild;
				guild.members.fetch(message.author).then(gMem=>{
					//console.log(gMem);
					var hasPerm = gMem.hasPermission("MOVE_MEMBERS");
					//console.log(hasPerm);
					if(!message.mentions.members.size){
						message.channel.send("You need to mention someone for this command.");
					}
					else if(hasPerm === false){
						message.channel.send("No you");
						message.guild.members.fetch(message.author)
							.then(mem =>{
								mem.voice.setChannel('606679114564239361');
							});
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
				});
				

				
			}
		} catch (err){
			console.log(err.stack);
		}
	},
};