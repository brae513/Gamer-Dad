

module.exports = {
	name: 'say',
	description: 'He probably won\'t',
	random:true,
	client:false,
	execute(message, args) {
		try{
			if(message.guild != null && message.author.id === '161975669834776576'){
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