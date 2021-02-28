const badAppleUtil = require('../utils/badapple');

module.exports = {
	name: 'badApple',
	description: 'Touhou',
	random:true,
	client:false,
	execute(message, args) {
		try{
			message.send('\`\`\`.\`\`\`').then(msg => {
				badAppleUtil.start(message);
			});

		} catch (err){
			console.log("Error in badApple");
			console.log(err.stack);
		}
	},
};