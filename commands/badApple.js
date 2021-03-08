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
					var spd = Math.min(1,args[0]);
					console.log(spd);
					badAppleUtil.start(msg,spd);
				}
				badAppleUtil.start(msg,1);
			});

		} catch (err){
			console.log("Error in badApple");
			console.log(err.stack);
		}
	},
};