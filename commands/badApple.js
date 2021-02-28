const badAppleUtil = require('../utils/badapple');

module.exports = {
	name: 'badApple',
	description: 'Touhou',
	random:true,
	client:false,
	execute(message, args) {
		try{
			badAppleUtil.start(message);
		} catch (err){
			console.log("Error in badApple");
			console.log(err.stack);
		}
	},
};