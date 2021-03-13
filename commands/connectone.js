

const spots = [20,26,32,74,80,86,128,134,140];
const reactions = ['816484885358837761'];

module.exports = {
	name: 'connectone',
	description: 'Connect one',
	random:false,
	client:true,
	execute(client,message, args) {
		try{
			if(message.mentions.members.size!=1){
				message.channel.send("You need to mention exactly one person for this command.");
			}
			else{
				var other = message.mentions.members.last();
				if(other.id==message.author.id){
					message.channel.send("You can't challenge yourself");
				}
				else if(other.id==768224881056677918){
					message.channel.send("Connect one between <@"+message.author.id+">(O) and <@"+other.id+">(X) in connect one!\n\`\`\` 1\n X\`\`\`\n I beat <@"+message.author.id+"> in connect one!");
				}
				else{
					message.channel.send("Connect one between <@"+message.author.id+">(O) and <@"+other.id+">(X) in connect one!\n\`\`\` 1\n _\`\`\`\n It's <@"+other.id+"> turn").then(msg =>{
						msg.react("1⃣");
					});
				}
			}

		} catch (err){
			console.log("Error in connect one");
			console.log(err.stack);
		}
	},
	react(message,reaction,user){
		try{
			var content = message.content;
			var header = content.substring(0,content.indexOf('!'));
			var board = content.substring(content.indexOf('!')+5,content.indexOf("It\'s")-4);
			var lastLine = content.substring(content.indexOf("It\'s"));
			
			var curPlayerId = lastLine.substring(lastLine.indexOf('<@')+2,lastLine.indexOf('>'));
			var playerOne = header.substring(header.indexOf('<@')+2,header.indexOf('>'));
			var playerTwo = header.substring(header.lastIndexOf('<@')+2,header.lastIndexOf('>'));
			
			console.log("got here!"+reaction.emoji.name);
			
			if(reaction.emoji.name.includes("1") && playerTwo == user.id){
				message.edit("Connect one between <@"+playerOne+">(O) and <@"+playerTwo+">(X) in connect one!\n\`\`\` 1\n X\`\`\`\n <@"+playerTwo+"> beat <@"+playerOne+"> in connect one!");
			}
		} catch (err){
			console.log("Error in connect one");
			console.log(err.stack);
		}
	},
};
