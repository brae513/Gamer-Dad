const profile = require("../utils/profile.js");


module.exports = {
	name: 'query',
	description: 'you cant use this',
	random:false,
	client:false,
	execute(message, args) {
		try{
			if(message.author.id === '161975669834776576'){
				var string = "";
				for(arg of args){
					string+=arg+" ";
				}
				profile.query(string);
			}
		}catch(err){
			console.log(err.stack);
		}
	},
};