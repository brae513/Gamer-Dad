const fetch = require('node-fetch');


module.exports = {
	name: 'deafen',
	description: 'deafens/undeafens yourself or people you mention',
	execute(message, args) {
		try{
			if(message.guild!=null){
				if(!message.mentions.members.size){
					message.guild.members.fetch(message.author)
						.then(mem =>{
							mem.voice.setDeaf(!mem.voice.serverDeaf);
						});
				}
				else{
					message.guild.members.fetch(message.author).then(gMem=>{
						console.log(gMem);
						if(gMem.hasPermission("DEAFEN_MEMBERS")){
							var anyDeaf = false;
							message.mentions.members.each(mem =>{
								if(mem.voice.serverDeaf){
									anyDeaf=true;
								}
								console.log(anyDeaf);
							});
							console.log(anyDeaf);
							message.mentions.members.each(mem=>{
								mem.voice.setDeaf(!anyDeaf);
							});
						}
						else{
							message.channel.send("no");
						}
					});
				}
			}
		}catch(err){
				console.log(err.stack);
		}
	},
};