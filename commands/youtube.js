const fetch = require('node-fetch');


module.exports = {
	name: 'youtube',
	description: 'best youtuber',
	random:true,
	client:false,
	execute(message, args) {
		try{
			fetch("https://www.youtube.com/channel/UCEbpj0WzFbJ6isjW4aUxRWw/videos")
				.then(res => res.text())
				.then(text =>{
					var toSearch = "gridVideoRenderer";
					var vids = [];
					while(text.includes(toSearch)){
						var spot = text.indexOf(toSearch);
						text=text.substring(spot+31);
						spot = text.indexOf("\"");
						var str ="https://www.youtube.com/watch?v="+text.substring(0,spot);
						//console.log(spot+":\t"+str);
						text=text.substring(text.indexOf(toSearch)+toSearch.length);
						vids.push(str);
					}
					var selected = Math.floor(Math.random()*vids.length);
					message.channel.send(vids[Math.floor(Math.random()*vids.length)]);

				});
		}catch(err){
			console.log("Error in joke");
			console.log(err.stack);
		}
	},
};

			