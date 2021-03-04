

module.exports = {
	name: 'rem',
	description: 'Kaleb',
	random:true,
	client:false,
	execute(message, args) {
		try{

				message.channel.send("https://cdn.discordapp.com/attachments/618845562262913066/816852322134654996/kalebsroom.png");
		}catch(err){
			console.log(err.stack);
		}
	},
};