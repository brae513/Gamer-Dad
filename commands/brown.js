module.exports = {
	name: 'brown',
	description: 'when Joe needs to be stopped',
	random:true,
	client:false,
	execute(message, args) {
		try{
			if(message.guild != null && message.guild.id === '599851762400362517'){
				var guild = message.guild;
				var roleToAdd = ['656653243597979648'];
				var joe = '147136628215775233';
				
				
			}
		} catch (err){
			console.log(err.stack);
		}
	},
};