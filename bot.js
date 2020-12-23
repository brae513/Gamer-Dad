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

client.on('messageReactionAdd', reaction => {
	try{
		var message = reaction.message;
		if(message.guild != null && message.guild.id === '599851762400362517'){
			if(reaction.emoji.id===('699139118826913794') && reaction.count >=5){
				if(message.author.id === '147136628215775233'){
					if(message.reactions.resolve('709979168598786049') && message.reactions.resolve('709979168598786049').me){
						return;
					}
					else{
						message.react(message.guild.emojis.cache.get('709979168598786049')).then(console.log());
					}
				}
				else if(reaction.me){
					return;
				}
				message.reply("Wow, that's stupid");
				message.react(message.guild.emojis.cache.get('699139118826913794')).then(console.log());
			}
		}
	} catch (err){
		console.log("error");
		console.log(err.stack);
	}
});

client.on('message', message => {
	try{
		if( message.author.bot) return;
		if(message.guild != null && message.guild.id === '599851762400362517'){
			// 618845562262913066 bot channel

			var content = message.content.toLowerCase();
			if(message.author.id === '147136628215775233'){
				message.react(message.guild.emojis.cache.get('699139118826913794'));
				message.react(message.guild.emojis.cache.get('768625855286476812'));
				message.react(message.guild.emojis.cache.get('790115323671347201'));
				var msg = message.content.toLowerCase();
				if(msg.indexOf("rockdust")>=0){
					message.guild.members.fetch(client.user).then(mem =>{
						mem.setNickname("Rockdust");
						message.channel.send("Yes, that's me");
						mem.setNickname("Gamer Dad");
					});
				}
				else if(msg.indexOf("sex")>=0 || msg.indexOf("s3x")>=0){
					message.reply("How about no");
					message.delete();
				}
			}
			else{
				if(content.indexOf('love') >= 0 && content.indexOf('dad') >=0){
					if(message.author.id === '378445325351780366'){
						message.channel.send("I disown you");
					}
					else{
						message.channel.send("I love you too");
					}	
				}
			}
			if(content.indexOf('joeboi') >=0 || content.indexOf('joedust')>=0){
				message.channel.send("joeboi");
			}
			/*if(content.indexOf('/kill rockdust')>=0){
				message.guild.members.fetch('378445325351780366')
					.then(mem =>{
						mem.voice.kick();
					});
				message.guild.members.fetch('385963850719035413')
					.then(mem =>{
						mem.voice.kick();
					});
			}*/
			if(Math.random()<=0.03){
				for(var i=0;i<3;i++){
					//message.guild.channels.resolve("618845562262913066").send("<@184876569054019584> <@378445325351780366> Rockdust");
				}
			}
			
		}
		if (!message.content.startsWith(prefix) || message.author.bot) return;

		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const command = args.shift().toLowerCase();

		if (!client.commands.has(command)) return;

		try {
			if(command==="status"){
				client.commands.get(command).execute(client,message, args);
			}
			else{
				client.commands.get(command).execute(message, args);
			}
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