const fetch = require('node-fetch');


module.exports = {
	name: 'newyears',
	description: 'new years countdown',
	execute(message, args) {
		try{
			console.log("New years");
			var countDownDate = new Date("Jan 1, 2021 06:00:00").getTime();
			var now = new Date().getTime();

			// Find the distance between now and the count down date
			var distance = countDownDate - now;
			console.log(distance);

			// Time calculations for days, hours, minutes and seconds
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);
			
			var str = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds +" seconds remaining."
			message.channel.send(str);
		}catch(err){
			console.log(err.stack);
		}
	},
};