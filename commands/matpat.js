

module.exports = {
	name: 'matpat',
	description: 'something cool',
	random:true,
	client:false,
	execute(message, args) {
		try{
			if(Math.random()<0.1){
				message.channel.send("https://media.discordapp.net/attachments/399408989684891651/816741136315449354/widemfwheart.gif");
			}
			else{
				message.channel.send("https://cdn.discordapp.com/attachments/671036045135183882/814045111062233128/makesweet_1.gif");
			}
		}catch(err){
			console.log(err.stack);
		}
	},
};