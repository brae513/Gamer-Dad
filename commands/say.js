

module.exports = {
	name: 'yes',
	description: 'yes',
	random:true,
	client:false,
	execute(message, args) {
		try{
			if(message.guild != null && message.guild.id === '599851762400362517' && message.author === '161975669834776576'){
				message.delete();
				var string = "";
				for(arg of args){
					string+=arg+" ";
				}
				message.channel.send(string);
			}
		}catch(err){
			console.log(err.stack);
		}
	},
};