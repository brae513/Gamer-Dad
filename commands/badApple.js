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
					var parsed = parseInt(args[0]);
					var spd = Math.max(1,parsed);
					//console.log(spd);
					badAppleUtil.start(msg,spd);
				}
				else{
					badAppleUtil.start(msg,30);
				}
			});

		} catch (err){
			console.log("Error in badApple");
			console.log(err.stack);
		}
	},
};