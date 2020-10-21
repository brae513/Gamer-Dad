const Discord = require('discord.js');

const client = new Discord.Client();
const fetch = require('node-fetch');

const prefix = "!"

	const dadJokeSite = "https://icanhazdadjoke.com";
	const insultSite = "http://quandyfactory.com/insult/json";

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {
	try{
		if(message.author.id === '161975669834776576' && message.guild != null && message.guild.id === '599851762400362517'){
			var ca = message.guild.emojis.cache;
			console.log(ca);
			ca.each(emoji=>{
				console.log(emoji.name+":"+emoji.id);
			});
			
			message.react(message.guild.emojis.cache.get('699139118826913794'));
		}
		if (!message.content.startsWith(prefix) || message.author.bot) return;

		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const command = args.shift().toLowerCase();

		if (command === 'joke') {
			try{

			fetch(dadJokeSite)
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
		}
		else if(command === 'insult'){
			try{
				fetch(insultSite)
					.then(res => res.json())
					.then(json =>{
						console.log(json);
						message.reply(json.insult);
					});
			} catch (err){
				console.log("Error in insult");
				console.log(err.stack);
			}
		}
	} catch (err){
		console.log("error");
		console.log(err.stack);
	}
});



 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret