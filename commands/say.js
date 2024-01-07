const aiVoice = require('../utils/aiVoice');
const fs = require('fs');

module.exports = {
	name: 'say',
	description: 'He probably won\'t',
	random:true,
	client:false,
	execute(message, args) {
		try{
			if(message.guild != null){
				var string = "";
				for(arg of args){
					string+=arg+" ";
				}
				channel = message.member.voice.channel;
				console.log('attempting to join '+channel.name);
				const { AudioPlayerStatus, joinVoiceChannel, createAudioPlayer, NoSubscriberBehavior, createAudioResource } = require('@discordjs/voice');

				
				//const path = aiVoice.getVoice(string)
				//const path = "TempFile.mp3";
				//aiVoice.getVoice(string)
				aiVoice.getVoice(string).then((path) => {
					console.log("Creating connection")
					const resource = createAudioResource(path);
					

					const player = createAudioPlayer({
						behaviors: {
							noSubscriber: NoSubscriberBehavior.Pause,
						},
					});
					player.play(resource);
					//console.log(resource)
					const connection = joinVoiceChannel({
						channelId: channel.id,
						guildId: channel.guild.id,
						adapterCreator: channel.guild.voiceAdapterCreator,
					});
					const subscription = connection.subscribe(player);
					// subscription could be undefined if the connection is destroyed!
					if (subscription) {
						// Unsubscribe after 5 seconds (stop playing audio on the voice connection)
						//setTimeout(() => {subscription.unsubscribe();connection.destroy()}, 15_000);
						player.on(AudioPlayerStatus.Idle, () => {
							console.log("Leaving call");
							subscription.unsubscribe();
							connection.destroy();
						});
					}
					
				});
			}
		}catch(err){
			console.log(err.stack);
		}
	},
};