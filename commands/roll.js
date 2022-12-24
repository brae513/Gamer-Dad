const fetch = require('node-fetch');


module.exports = {
	name: 'roll',
	description: 'roll',
	random:true,
	client:false,
	execute(message, args) {
		try{
			if(args.length < 1 || args.length > 2){
				message.channel.send("Incorrect syntax:\nCorrect syntax: !roll (max_value) or !roll (min_value) (max_value)");
			}
			else if(args.length == 1){
				var max = Number(args[0]);
				var val = Math.floor(Math.random()*max)+1;
				message.channel.send("You rolled a "+val);
			}
			else{
				var max = Number(args[1]);
				var min = Number(args[0]);
				var val = Math.floor(Math.random()*(max-min))+1+min;
				message.channel.send("You rolled a "+val);
			}
		}catch(err){
			console.log(err.stack);
		}
	},
};