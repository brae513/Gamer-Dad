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
	
       message.reply("Mountains aren\'t just funny, they are hill areas");

	}
	else if(command === 'insult'){
		message.reply("Insulting");
		//const res = fetch(insultSite);
		fetch(insultSite)
			.then(res => res.json())
			.then(json => console.log(json));
		//let insult = res.json().insult;
		//insult = insult.charAt(0).toLowerCase() + insult.slice(1);
		//message.reply("You suck");
		//message.reply(insult);
	}

});



 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret