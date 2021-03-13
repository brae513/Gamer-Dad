

const spots = [20,26,32,74,80,86,128,134,140];
const reactions = ['816484885358837761'];

module.exports = {
	name: 'tictactoe',
	description: 'It\'s just tic-tac-toe',
	random:false,
	client:true,
	execute(client,message, args) {
		try{
			if(message.mentions.members.size!=1){
				message.channel.send("You need to mention exactly one person for this command.");
			}
			else{
				var other = message.mentions.members.last();
				
				if(other.id == message.author.id){
					message.channel.send("You can't play against yourself, but if you have no friends you can challenge me instead");
				}
				else{
					var vals = [1,2,3,4,5,6,7,8,9];
					var toSend = getHeader(message.author.id,other.id)+'\n\`\`\`' + getBoard(vals)+'\`\`\`\nIt\'s <@'+other.id+'>(X)\'s turn!';
					if(other.id==768224881056677918){
						vals[Math.floor(Math.random()*9)]='X';
						toSend = getHeader(message.author.id,other.id)+'\n\`\`\`' + getBoard(vals)+'\`\`\`\nIt\'s <@'+message.author.id+'>(O)\'s turn!'
					}
					message.channel.send(toSend).then(msg=>{						
							msg.react("1⃣").then(
							msg.react("2⃣").then(
							msg.react("3⃣").then(
							msg.react("4⃣").then(
							msg.react("5⃣").then(
							msg.react("6⃣").then(
							msg.react("7⃣").then(
							msg.react("8⃣").then(
							msg.react("9⃣").then))))))));
						});
				}
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
			console.log(board.length);
			
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
						var boardState = checkBoard(board);
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
							if(playerTwo==768224881056677918){
								board=calculateMove(board);
								boardState = checkBoard(board);
								console.log(boardState);
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
									message.edit(getHeader(playerOne,playerTwo)+"\n\`\`\`"+board+"\`\`\`\nIt\'s <@"+playerOne+">(O)\'s turn!");
								}
							}
							else{
								message.edit(getHeader(playerOne,playerTwo)+"\n\`\`\`"+board+"\`\`\`\nIt\'s <@"+otherPlayerId+">("+nextSym+")\'s turn!");
							}
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
};

//returns a text-version of a board based on an array of values
function getBoard(vals){
	var topLine = '     |     |     ';
	var botLine = '_____|_____|_____';
	var topMid = '  '+vals[0]+'  |  '+vals[1]+'  |  '+vals[2]+'  ';
	var midMid = '  '+vals[3]+'  |  '+vals[4]+'  |  '+vals[5]+'  ';
	var botMid = '  '+vals[6]+'  |  '+vals[7]+'  |  '+vals[8]+'  ';
	var board = topLine+'\n'+topMid+'\n'+botLine+'\n'+topLine+'\n'+midMid+'\n'+botLine+'\n'+topLine+'\n'+botMid+'\n'+topLine;
	return board;
}

//gives the default header for messages
function getHeader(p1,p2){
	return 'tictactoe between <@'+p1 +'> (O) and <@'+p2+'> (X)!';
}

//returns an array version of a board
function getVals(board){
	var vals = [];
	for(var spot of spots){
		vals.push(board.charAt(spot));
	}
	return vals;
}

//Checks if spot is empty (available to move on)
function isEmpty(board,spot){
	return getVals(board)[spot]!='X' && getVals(board)[spot]!='O';
}

//Place a value on the board
function place(board,spot,val){
	return board.substring(0,spots[spot])+val+board.substring(spots[spot]+1);
}

//check board to see if there is a victor or a draw
function checkBoard(board){
	return checkVals(getVals(board));
}

//Check array of vals to see if there is a victor or a draw
function checkVals(vals){
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
	if(victor=='none' && getAvailMoves(vals).length==0){
		victor='draw';
	}
	return victor;
}
//Calculate gamer dad's best move on the current board
function calculateMove(board){
	var max = -11;
	var moves = [1];
	var vals = getVals(board);
	var avail = getAvailMoves(vals);
	for(var m of avail){
		var temp = [...vals];
		temp[m-1]='X';
		var score = maxMove(temp);
		console.log(score+":"+m);
		if(score>max){
			moves=[m];
			max=score;
		}
		else if(score==max){
			moves.push(m);
		}
	}
	move = moves[Math.floor(Math.random()*moves.length)];
	return place(board,move-1,'X');
}

//MinMax tree max side
function maxMove(vals){
	var check = checkVals(vals);
	if(check=='draw'){
		return 0;
	}
	if(check=='X'){
		return 10;
	}
	if(check=='O'){
		return -10;
	}
	var avails = getAvailMoves(vals);
	var min = 10;
	for(var m of avails){
		var temp = [...vals];
		temp[m-1]='O';
		var score = minMove(temp);
		if(min>score){
			min=score;
		}
	}
	return min;
}

//MinMax tree min side
function minMove(vals){
	var check = checkVals(vals);
	if(check=='draw'){
		return 0;
	}
	if(check=='X'){
		return 10;
	}
	if(check=='O'){
		return -10;
	}
	var avails = getAvailMoves(vals);
	var max = -10;
	for(var m of avails){
		var temp = [...vals];
		temp[m-1]='X';
		var score = maxMove(temp);
		if(max<score){
			max=score;
		}
	}
	return max;
}

function getAvailMoves(vals){
	var out = [];
	for(var val of vals){
		if(val!='X' && val!='O'){
			out.push(val);
		}
	}
	return out;
}