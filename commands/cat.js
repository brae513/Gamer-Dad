

module.exports = {
	name: 'cat',
	description: 'cat',
	random:true,
	client:false,
	execute(message, args) {
		try{
			message.channel.send(`https://i.imgur.com/PeKEqzb.png https://i.imgur.com/nGm0WuK.png https://i.imgur.com/XBi1feh.png https://i.imgur.com/GsFSPHz.png`);
		}catch(err){
			console.log(err.stack);
		}
	},
};