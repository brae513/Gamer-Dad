

const spots = [20,26,32,74,80,86,128,134,140];
const reactions = ['816484885358837761'];

module.exports = {
	name: 'tictactoe',
	description: 'It\'s just tic-tac-toe',
	random:false,
	client:false,
	execute(message, args) {
		try{
			if(message.mentions.members.size!=1){
				message.channel.send("You need to mention exactly one person for this command.");
			}
			else{
				var other = message.mentions.members.last();
				//var tic = require('./tictactoe');
				message.channel.send(getHeader(message.author.id,other.id)+'\n\`\`\`' + getBoard([1,2,3,4,5,6,7,8,9])+'\`\`\`\nIt\'s <@'+other.id+'>(X)\'s turn!').then(msg=>{
					msg.react(":one:").then(
					msg.react(":two:").then(
					msg.react(":three:").then(
					msg.react(":four:").then(
					msg.react(":five:").then(
					msg.react(":six:").then(
					msg.react(":seven:").then(
					msg.react(":eight:").then(
					msg.react(":nine:")))))))));
				});
			}

		} catch (err){
			console.log("Error in tic-tac-toe");
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
			var otherPlayerId = "";
			var curSymbol = "?"
			if(curPlayerId==playerOne){
				otherPlayerId=playerTwo;
				curSymbol="O";
			}
			else{
				otherPlayerId=playerOne;
				curSymbol="X";
			}
			//console.log(header);
			console.log(board);
			console.log(lastLine);
			console.log(playerOne);
			console.log(playerTwo);
			
			if(curPlayerId == user.id){
				var spot=-1;
				for(var i=1;i<10;i++){
					if(reaction.emoji.name.includes(""+i)){
						spot=i-1;
						break;
					}
				}
				if(spot!=-1){
					if(isEmpty(board,spot)){
						board=place(board,spot,curSymbol);
						boardState = checkBoard(board);
						if(boardState=='X'){
							message.edit('Finished '+getHeader(playerOne,playerTwo)+'\n\`\`\`'+board+"\`\`\`\n<@"+playerTwo+"> wins!");
						}
						else if(boardState=='O'){
							message.edit('Finished '+getHeader(playerOne,playerTwo)+'\n\`\`\`'+board+"\`\`\`\n<@"+playerOne+"> wins!");
						}
						else if(boardState=='draw'){
							message.edit('Finished '+getHeader(playerOne,playerTwo)+'\n\`\`\`'+board+"\`\`\`\nDraw!");
						}
						else{
							var nextSym = '?'
							if(curSymbol=='O'){
								nextSym='X';
							}
							else{
								nextSym='O';
							}
							message.edit(getHeader(playerOne,playerTwo)+"\n\`\`\`"+board+"\`\`\`\nIt\'s <@"+otherPlayerId+">("+nextSym+")\'s turn!");
						}
					}
					else{
						// TODO: reply with taken spot here
					}
				}
			}
		} catch (err){
			console.log("Error in tic-tac-toe");
			console.log(err.stack);
		}
	},
	/*getBoard,
	getVals,
	isEmpty,
	place,*/
};


function getBoard(vals){
	var topLine = '     |     |     ';
	var botLine = '_____|_____|_____';
	var topMid = '  '+vals[0]+'  |  '+vals[1]+'  |  '+vals[2]+'  ';
	var midMid = '  '+vals[3]+'  |  '+vals[4]+'  |  '+vals[5]+'  ';
	var botMid = '  '+vals[6]+'  |  '+vals[7]+'  |  '+vals[8]+'  ';
	var board = topLine+'\n'+topMid+'\n'+botLine+'\n'+topLine+'\n'+midMid+'\n'+botLine+'\n'+topLine+'\n'+botMid+'\n'+topLine;
	return board;
}

function getHeader(p1,p2){
	return 'tictactoe between <@'+p1 +'> (O) and <@'+p2+'> (X)!';
}

function getVals(board){
	var vals = [];
	for(var spot of spots){
		vals.push(board.charAt(spot));
	}
	//vals=[board.charAt(20),board.charAt(26),board.charAt(32),board.charAt(74),board.charAt(80),board.charAt(86),board.charAt(128),board.charAt(134),board.charAt(140)];
	return vals;
}

function isEmpty(board,spot){
	return getVals(board)[spot]!='X' && getVals(board)[spot]!='O';
}

function place(board,spot,val){
	return board.substring(0,spots[spot])+val+board.substring(spots[spot]+1);
}

function checkBoard(board){
	var vals = getVals(board);
	var victor = 'none';
	for(var i=0;i<3;i++){
		if(vals[i*3]==vals[i*3+1] && vals[i*3]==vals[i*3+2]){
			victor=vals[i*3];
		}
		if(vals[i]==vals[i+3]&&vals[i]==vals[i+6]){
			victor=vals[i];
		}
	}
	if(vals[0]==vals[4] && vals[0]==vals[8]){
		victor=vals[0];
	}
	if(vals[2]==vals[4] && vals[2]==vals[6]){
		victor=vals[2];
	}
	if(victor=='none'){
		victor='draw';
		for(var spot of spots){
			if(board.charAt(spot)!='X' && board.charAt(spot)!='O'){
				victor='none';
			}
		}
	}
	return victor;
}



//var tic = require('./tictactoe');

/*var board = getBoard(['O',2,3,4,5,6,7,8,'X']);
board = place(board,4,'O');
console.log(board);
var vals = getVals(board);
console.log(vals);
console.log(isEmpty(board,0));
console.log(checkBoard(board));*/