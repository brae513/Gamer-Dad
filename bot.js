const Discord = require('discord.js');
const fetch = require('node-fetch');
const fs = require('fs');
const intentBits = Discord.GatewayIntentBits;

const commandUtil = require('./utils/commandUtil');
//const db = require('./utils/database.js');


const prefix = "!"

const client = new Discord.Client({ 
	intents: [
		intentBits.Guilds,
		intentBits.GuildMembers,
		intentBits.GuildModeration ,
		intentBits.GuildIntegrations,
		intentBits.GuildEmojisAndStickers ,
		intentBits.GuildVoiceStates ,
		intentBits.GuildPresences ,
		intentBits.GuildMessages  ,
		intentBits.GuildMessageReactions  ,
		intentBits.DirectMessages  ,
		intentBits.DirectMessageReactions  ,
		intentBits.MessageContent  ,
	], 
	partials: [Discord.Partials.Channel], });

client.commands = new Discord.Collection();

//const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
commandUtil.init();

for (const command of commandUtil.getCommands()) {
	client.commands.set(command.name, command);
}

function newYearsReminder(){
	try{
		var currentDate = new Date();
		var year = 1901+ currentDate.getYear();
		if(new Date().getMonth()==0 && currentDate.getDate()==1){
			year--;
		}
		var nextNewYears = "Jan 1, "+year+" 00:00:00 GMT-8:00";
		var countDownDate = new Date(nextNewYears).getTime();
		var now = currentDate.getTime();

		// Find the distance between now and the count down date
		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		//console.log("seconds:"+seconds);
		
		var str = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds +" seconds remaining.<@385963850719035413>"

		if(days>0){
			if(hours<1 && minutes<1 && seconds<1){
				client.guilds.fetch('599851762400362517').then(guild=>{
					console.log("new years reminder");
					guild.channels.resolve('618845562262913066').send(str);
				});
			}
		}
		else if(hours > 0){
			if(minutes<1 && seconds<1){
				client.guilds.fetch('599851762400362517').then(guild=>{
					console.log("new years reminder");
					guild.channels.resolve('618845562262913066').send(str);
				});
			}
		}
		else if(minutes>0){
			if(seconds<1 && seconds>-1){
				client.guilds.fetch('599851762400362517').then(guild=>{
					console.log("new years reminder");
					guild.channels.resolve('618845562262913066').send(str);
				});
			}
		}
		else if(seconds>0){
			client.guilds.fetch('599851762400362517').then(guild=>{
				console.log("new years reminder");
				guild.channels.resolve('618845562262913066').send(str);
			});
		}
		else if(distance > -1){
			client.guilds.fetch('599851762400362517').then(guild=>{
				console.log("new years reminder");
				guild.channels.resolve('599851762400362519').send("Happy new years gamers!\nWelcome to "+year);
			});
		}
			
		
	} catch (err){
		console.log("error");
		console.log(err.stack);
	}
	setTimeout(() => { 
		newYearsReminder();
	},1_000)
}

function hourlyUpdates(){
	var date = new Date();
	console.log("Commencing hourly updates for:"+date.getMonth()+"/"+date.getDate()+":"+date.getHours());
	setTimeout(() => { 
		hourlyUpdates();
	},1_000*60*60)
}
// TODO Find replacement for this
//client.setInterval(newYearsReminder,1000);
newYearsReminder();
hourlyUpdates();
//client.setInterval(hourlyUpdates,3600000);

client.on('ready', () => {

	try{
		console.log('I am ready!');

		client.guilds.fetch('161976243233751040').then(guild =>{
			guild.channels.resolve('190981291192090624').send("New build ready!");
		});
		
		//db.init();
		
	} catch(err){
		console.log("error in startup");
		console.log(err.stack);
	}
});

const bdays = {
	"135648747815305217":{
		"month":5,
		"day":7,
		"name":"Smeag"
	},	
	"163297954822750208":{
		"month":10,
		"day":10,
		"name":"Race"
	},
	"378445325351780366":{
		"month":9,
		"day":23,
		"name":"Diego"
	},
	"586033322942267402":{
		"month":12,
		"day":3,
		"name":"Kaleb"
	},
	"300041614322040842":{
		"month":1,
		"day":3,
		"name":"Dom"
	},
	"385963850719035413":{
		"month":11,
		"day":-1,
		"name":"Marc"
	},
	"384866638597718019":{
		"month":2,
		"day":-1,
		"name":"Erick"
	},
	"161975669834776576":{
		"month":5,
		"day":14,
		"name":"Brae"
	}
}

client.on('voiceStateUpdate',(oldState, newState) => {
	try{
		if(newState.member.id in bdays){
			if(newState.channel != null && oldState.channel === null && newState.guild.id =='599851762400362517'){
				var now = new Date();
				var bday = bdays[newState.member.id]
				now.setTime(now.getTime()-(8*60*60*1000));
				console.log(now)
				if(now.getMonth()==bday["month"]-1 && now.getDate()==bday["day"]){
					client.guilds.fetch('599851762400362517').then(guild =>{
						guild.channels.resolve('618845562262913066').send(`https://itsyourbirthday.today/#${bday["name"]} <@${newState.member.id}>`);
					});
				}
			}
		}
	} catch (err){
		console.log(err.stack);
	}
});

client.on('messageReactionRemove', (reaction,user) => {
	try{
		var message = reaction.message;
		if(message.editable){
			if(message.content.substring(0,9)=='tictactoe'){
				client.commands.get('tictactoe').react(message,reaction,user);
			}
			else if(message.content.substring(0,11)=='Connect one'){
				client.commands.get('connectone').react(message,reaction,user);
			}
			else if(message.content.substring(0,12)=='Connect four'){
				client.commands.get('connectfour').react(message,reaction,user);
			}
		}
	} catch (err){
		console.log(err.stack);
	}
});
	
client.on('messageReactionAdd', (reaction,user) => {
	try{
		var message = reaction.message;
		if(message.editable){
			if(message.content.substring(0,9)=='tictactoe'){
				client.commands.get('tictactoe').react(message,reaction,user);
			}
			else if(message.content.substring(0,11)=='Connect one'){
				client.commands.get('connectone').react(message,reaction,user);
			}
			else if(message.content.substring(0,12)=='Connect four'){
				client.commands.get('connectfour').react(message,reaction,user);
			}
		}
		if(message.guild != null && message.guild.id === '599851762400362517'){
			if(reaction.emoji.id===('699139118826913794') && reaction.count >=5){
				if(message.author.id === '147136628215775233'){
					if(message.reactions.resolve('709979168598786049') && message.reactions.resolve('709979168598786049').me){
						return;
					}
					else{
						message.react(message.guild.emojis.cache.get('709979168598786049')).then();
					}
				}
				else if(reaction.me){
					return;
				}
				message.reply("Wow, that's stupid");
				message.react(message.guild.emojis.cache.get('699139118826913794')).then();
			}
		}
	} catch (err){
		console.log(err.stack);
	}
});

client.on('messageUpdate', (oldMessage, message) =>{
	try{
		if(message.guild != null && message.guild.id === '599851762400362517'){
			// 618845562262913066 bot channel

			var content = message.content.toLowerCase();

			if(message.author.id === '147136628215775233'){
				if(content.indexOf("sex")>=0 || content.indexOf("s3x")>=0){
					message.reply("You think you could trick me?");
					message.delete();
				}
			}
		}
	} catch (err){
		console.log(err.stack);
	}
});

client.on('messageCreate', message => {
	try{
		if( message.author.bot) return;
		if(message.guild != null && message.guild.id === '599851762400362517'){
			// 618845562262913066 bot channel

			var content = message.content.toLowerCase();
			if(message.author.id === '300041614322040842'){
				if(Math.random()<0.01){
					message.channel.send("https://cdn.discordapp.com/emojis/807855187318407179.gif?v=1");
				}
			}
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
			
		}
		if (!message.content.startsWith(prefix) || message.author.bot) return;

		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const commandName = args.shift().toLowerCase();

		if (!client.commands.has(commandName)) return;
		
		const command = client.commands.get(commandName);

		try {
			console.log(command.name+":"+command.client);
			if(command.client==true){
				command.execute(client, message, args);
			}
			else{
				command.execute(message, args);
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