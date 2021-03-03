const badAppleUtil = require('../utils/badapple');

module.exports = {
	name: 'badapple',
	description: 'Touhou',
	random:true,
	client:false,
	execute(message, args) {
		try{
			message.channel.send('\`\`\`Bad Apple\`\`\`').then(msg => {
				if(args.length==1){
					badAppleUtil.start(msg,args[0]);
				}
				badAppleUtil.start(msg,0);
			});

		} catch (err){
			console.log("Error in badApple");
			console.log(err.stack);
		}
	},
};