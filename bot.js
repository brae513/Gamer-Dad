const Discord = require('discord.js');
const fetch = require('node-fetch');
const fs = require('fs');

const prefix = "!"

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}



client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {
	try{
		if(message.author.id === '147136628215775233' && message.guild != null && message.guild.id === '599851762400362517'){
			message.react(message.guild.emojis.cache.get('699139118826913794'));
			message.react(message.guild.emojis.cache.get('768625855286476812'));
			var msg = message.content.toLowerCase();
			if(msg.indexOf("rockdust")>=0){
				message.guild.members.fetch(client.user).then(mem =>{
					mem.setNickname("Rockdust");
					message.channel.send("Yes, that's me");
					mem.setNickname("Gamer Dad");
				});
			}
			else if(msg.indexOf("sex")>=0){
				message.reply("How about no");
				message.delete();
			}
		}
		if (!message.content.startsWith(prefix) || message.author.bot) return;

		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const command = args.shift().toLowerCase();

		if (!client.commands.has(command)) return;

		try {
			client.commands.get(command).execute(message, args);
		} catch (error) {
			console.error(error);
			message.reply('there was an error trying to execute that command!');
		}
	} catch (err){
		console.log("error");
		console.log(err.stack);
	}
});



 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret