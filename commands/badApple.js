const badAppleUtil = require('../utils/badapple');

module.exports = {
	name: 'badapple',
	description: 'Touhou',
	random:true,
	client:false,
	execute(message, args) {
		try{
			message.channel.send('\`\`\`.\`\`\`').then(msg => {
				badAppleUtil.start(msg);
			});

		} catch (err){
			console.log("Error in badApple");
			console.log(err.stack);
		}
	},
};