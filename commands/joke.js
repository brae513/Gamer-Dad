const fetch = require('node-fetch');


module.exports = {
	name: 'joke',
	description: 'tells a dad joke',
	execute(message, args) {
		try{
			fetch("https://icanhazdadjoke.com")
				.then(res => res.text())
				.then(text =>{
					var str = text;
					var start = str.lastIndexOf("subtitle");
					if(start>0){
						start = start+10;
						str=str.substring(start);
						var end = str.indexOf("</p>");
						str = str.substring(0,end);
						message.reply(str);
					}
					else{
						message.reply("Mountains aren\'t just funny, they are hill areas");
						console.log(text);
					}
				});
			}catch(err){
				console.log("Error in joke");
				console.log(err.stack);
			}
	},
};