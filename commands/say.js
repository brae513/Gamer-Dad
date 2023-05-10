const aiVoice = require('../utils/aiVoice');


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
				const { joinVoiceChannel, createAudioPlayer, NoSubscriberBehavior, createAudioResource } = require('@discordjs/voice');

				const connection = joinVoiceChannel({
					channelId: channel.id,
					guildId: channel.guild.id,
					adapterCreator: channel.guild.voiceAdapterCreator,
				});
				const path = aiVoice.getVoice(string)
				setTimeout(() => { 
					const resource = createAudioResource(path);
					

					const player = createAudioPlayer({
						behaviors: {
							noSubscriber: NoSubscriberBehavior.Pause,
						},
					});
					player.play(resource);
					const subscription = connection.subscribe(player);
					// subscription could be undefined if the connection is destroyed!
					if (subscription) {
						// Unsubscribe after 5 seconds (stop playing audio on the voice connection)
						setTimeout(() => {subscription.unsubscribe();connection.destroy()}, 5_000);
					}
				}, 3_000);
			}
		}catch(err){
			console.log(err.stack);
		}
	},
};