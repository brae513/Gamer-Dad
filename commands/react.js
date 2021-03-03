

module.exports = {
	name: 'react',
	description: 'reacts to your message',
	random:false,
	client:true,
	execute(client,message, args) {
		try{
			if(args!=1){
				message.channel.send("invalid usage, correct usage is !react (reactionID)");
			}
			else{
				message.react(args[0]);
			}
		}catch(err){
			console.log("Error in react");
			console.log(err.stack);
		}
	},
};