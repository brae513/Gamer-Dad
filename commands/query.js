const commandUtil = require("../utils/profile.js");


module.exports = {
	name: 'query',
	description: 'you cant use this',
	random:false,
	client:true,
	execute(message, args) {
		try{
			if(message.author.id === '161975669834776576'){
				profile.query(arg[0]);
			}
		}catch(err){
			console.log(err.stack);
		}
	},
};