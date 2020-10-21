module.exports = {
	name: 'ban',
	description: 'bans someone',
	execute(message, args) {
		try{
			if(message.guild != null && message.guild.id === '599851762400362517' && (message.author.id == '161975669834776576' || message.author.id == '378445325351780366')){
				if(!message.mentions.members.size){
					message.channel.send("You need to mention someone for this command.");
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