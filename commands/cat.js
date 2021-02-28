const delay = 1000;

module.exports = {
	name: 'cat',
	description: 'cat',
	random:true,
	client:false,
	execute(message, args) {
		try{
			message.channel.send('https://i.imgur.com/PeKEqzb.png');
			setTimeout(() => { message.channel.send('https://i.imgur.com/nGm0WuK.png');},delay);
			setTimeout(() => { message.channel.send('https://i.imgur.com/XBi1feh.png');},delay*2);
			setTimeout(() => { message.channel.send('https://i.imgur.com/GsFSPHz.png');},delay*3);
		}catch(err){
			console.log(err.stack);
		}
	},
};