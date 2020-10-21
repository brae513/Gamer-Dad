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
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

    if (command === 'joke') {
		try{

       message.reply("Mountains aren\'t just funny, they are hill areas");
		fetch(dadJokeSite)
			.then(res =>{
				console.log(res.text());
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

});



 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret