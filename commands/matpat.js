

module.exports = {
	name: 'matpat',
	description: 'something cool',
	random:true,
	client:false,
	execute(message, args) {
		try{
			if(Math.random()<0.1){
				message.channel.send("https://cdn.discordapp.com/attachments/768247266531475466/822300693585985556/92bc82d1-fb73-42fa-bc32-1c266b3758c1.gif");
			}
			else{
				if(message.author.id === '586033322942267402'){
					message.channel.send("https://media.discordapp.net/attachments/399408989684891651/816741136315449354/widemfwheart.gif");
				}
				else if(message.author.id === '147136628215775233'){
					message.channel.send("https://media.discordapp.net/attachments/599851762400362519/816951913237053440/image0.gif");
				}
				else if(message.author.id === '378445325351780366'){
					message.channel.send("https://tenor.com/view/bingus-binguscord-gif-18769468");
				}
				else if(message.author.id ==== '385963850719035413'){
					message.channel.send("https://cdn.discordapp.com/attachments/796384999658094653/817487962064289872/makesweet.gif");
				}
				else{
					message.channel.send("https://cdn.discordapp.com/attachments/671036045135183882/814045111062233128/makesweet_1.gif");
				}
			}
		}catch(err){
			console.log(err.stack);
		}
	},
};