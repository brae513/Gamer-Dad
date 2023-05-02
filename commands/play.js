

module.exports = {
	name: 'play',
	description: 'It\'s my turn',
	random:false,
	client:false,
	execute(message, args) {
		try{
			if(args.length < 1 || args.length > 1){
				return;
				//message.channel.send("Incorrect syntax:\nCorrect syntax: !play url");
			}
			if(Math.random()>0.01)
				return;
			channel = message.member.voice.channel;
			console.log('attempting to join '+channel.name);
			const { joinVoiceChannel, createAudioPlayer, NoSubscriberBehavior, createAudioResource } = require('@discordjs/voice');
			const { stream } = require('play-dl');
			
			const target_id = '1006684796983971900';
			const path = './utils/myturn.mp3'
			const resource = createAudioResource(path);
			const yt_url = args[0]
			
			setTimeout(() => {
				const connection = joinVoiceChannel({
					channelId: channel.id,
					guildId: channel.guild.id,
					adapterCreator: channel.guild.voiceAdapterCreator,
				});
				setTimeout(() => { 
					console.log("Time is up");
					target = channel.members.get(target_id);
					if(target){
						target.voice.disconnect();
					}
				
				},1_000)
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
					//setTimeout(() => {subscription.unsubscribe();connection.destroy()}, 5_000);
					setTimeout(() => {
							
							stream(yt_url).then((source) => {
								const ytResource = createAudioResource(source.stream, {
									 inputType : source.type
								})
								player.play(ytResource)
							});
						}, 3_000)
				}
			}, 10000);
			
		}catch(err){
			console.log(err.stack);
		}
	},
};