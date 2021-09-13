
const startVals = [['_','_','_','_','_','_','_'],['_','_','_','_','_','_','_'],['_','_','_','_','_','_','_'],['_','_','_','_','_','_','_'],['_','_','_','_','_','_','_'],['_','_','_','_','_','_','_']];

module.exports = {
	name: 'connectfour',
	description: 'Connect four',
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
					var toSend = getHeader(message.author.id,other.id)+"\n";
					var vals = startVals;
					vals = place(vals,Math.floor(Math.random()*7),'X');
					toSend+= "\`\`\`"+getBoard(vals)+"\`\`\`\n";
					toSend+= "It\'s <@"+message.author.id+">(O)\'s turn!";
					message.channel.send(toSend).then(msg =>{
						msg.react("1⃣").then(
						msg.react("2⃣").then(
						msg.react("3⃣").then(
						msg.react("4⃣").then(
						msg.react("5⃣").then(
						msg.react("6⃣").then(
						msg.react("7⃣")))))));
					});				}
				else{
					var toSend = getHeader(message.author.id,other.id)+"\n";
					toSend+= "\`\`\`"+getBoard(startVals)+"\`\`\`\n";
					toSend+= "It\'s <@"+other.id+">(X)\'s turn!";
					message.channel.send(toSend).then(msg =>{
						msg.react("1⃣").then(
						msg.react("2⃣").then(
						msg.react("3⃣").then(
						msg.react("4⃣").then(
						msg.react("5⃣").then(
						msg.react("6⃣").then(
						msg.react("7⃣")))))));
					});
				}
			}

		} catch (err){
			console.log("Error in connect four");
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
			if(curPlayerId == user.id){
				for(var i=1;i<=7;i++){
					if(reaction.emoji.name.includes(""+i)){
						var vals = getVals(board);
						if(hasMove(vals,i-1)){
							vals = place(vals,i-1,curSymbol);
							var check = checkVals(vals);
							board=getBoard(vals);
							if(check=='X'){
								message.edit('Finished '+getHeader(playerOne,playerTwo)+'\n\`\`\`'+board+"\`\`\`\n<@"+playerTwo+"> wins!");
							}
							else if(check =='O'){
								message.edit('Finished '+getHeader(playerOne,playerTwo)+'\n\`\`\`'+board+"\`\`\`\n<@"+playerOne+"> wins!");
							}
							else if(check == "draw"){
								message.edit('Finished '+getHeader(playerOne,playerTwo)+'\n\`\`\`'+board+"\`\`\`\nDraw!");
							}
							else{
								if( playerTwo == 768224881056677918){
									vals = aiMove(vals);
									board = getBoard(vals);
									var check = checkVals(vals);
									if(check=='X'){
										message.edit('Finished '+getHeader(playerOne,playerTwo)+'\n\`\`\`'+board+"\`\`\`\n<@"+playerTwo+"> wins!");
									}
									else if(check =='O'){
										message.edit('Finished '+getHeader(playerOne,playerTwo)+'\n\`\`\`'+board+"\`\`\`\n<@"+playerOne+"> wins!");
									}
									else if(check == "draw"){
										message.edit('Finished '+getHeader(playerOne,playerTwo)+'\n\`\`\`'+board+"\`\`\`\nDraw!");
									}
									else{
										message.edit(genMessage(playerOne,playerTwo,board,curPlayerId));
									}
								}
								else{
									message.edit(genMessage(playerOne,playerTwo,getBoard(vals),otherPlayerId));
								}
							}
						}
						//else{
						//	message.edit(genMessage(playerOne,playerTwo,board,playerTwo)+"\nThat move is invalid (column is full)");
						//}
					}
						
				}
			}
		} catch (err){
			console.log("Error in connect four");
			console.log(err.stack);
		}
	},
};

//returns a text-version of a board based on an array of values
function getBoard(vals){
	var board = '1 2 3 4 5 6 7';
	for(var i=0;i<6;i++){
		board+="\n";
		for(var j=0;j<7;j++){
			board+=vals[i][j]+" ";
		}
	}
	return board;
}

//gives the default header for messages
function getHeader(p1,p2){
	return 'Connect four between <@'+p1 +'> (O) and <@'+p2+'> (X)!';
}

//generates message to send
function genMessage(p1,p2,board,curPlayer){
	var out = getHeader(p1,p2)+"\n";
	out+= "\`\`\`"+board+"\`\`\`\n";
	out+= "It\'s <@"+curPlayer+">(X)\'s turn!";
	return out;
}

//returns an array version of a board
function getVals(board){
	var vals = [];
	var start = 14;
	for(var i=0;i<6;i++){
		vals[i]=[];
		for(var j=0;j<7;j++){
			vals[i][j]=board.charAt(start+i*15+j*2);
		}
	}
	return vals;
}

//Checks if spot is empty (available to move on)
function hasMove(vals,col){
	var out = false;
	for(var i=0;i<6;i++){
		if(vals[i][col]=='_'){
			out=true;
		}
	}
	return out;
}

//Place a value on the board
function place(vals,spot,val){
	var newVals = JSON.parse(JSON.stringify(vals));
	for(var i=5;i>=0;i--){
		if(vals[i][spot]=='_'){
			newVals[i][spot]=val;
			break;
		}
	}
	return newVals;
}

//check board to see if there is a victor or a draw
function checkBoard(board){
	return checkVals(getVals(board));
}

//Check array of vals to see if there is a victor or a draw
function checkVals(vals){
	var hasBlank = false;
	//top left to bottom right starts, check if 3 below or 3 right or 3 down right diags or 3 bot left diags are the same
	for(var i=0;i<6;i++){
		for(var j=0;j<7;j++){
			if(vals[i][j]!='_'){
				var col = true;
				var row = true;
				var rdiag = true;
				var ldiag = true;

				for(var k=1;k<4;k++){
					if(j>=4 || vals[i][j]!=vals[i][j+k]){
						row=false;
					}
					if(i>=3 || vals[i][j]!=vals[i+k][j]){
						col=false;
					}
					if(i>=3 || j>=4 || vals[i][j]!=vals[i+k][j+k]){
						rdiag=false;
					}
					if(i>=3 || j<=2 || vals[i][j]!=vals[i+k][j-k]){
						ldiag=false;
					}
				}
				if(col || row || rdiag || ldiag){
					return vals[i][j];
				}
			}
			else{
				hasBlank=true;
			}
		}
	}
	
	if(hasBlank)
		return "none";
	return "draw";
}

function availMoves(vals){
	var out = [];
	for(var i = 0;i<7;i++){
		if(vals[0][i]=='_'){
			out.push(i);
		}
	}
	return out;
}

function aiMove(vals){

	var winMove = -1;
	var loseMove = -1;
	var loseIfMoves = [];
	var moves = availMoves(vals);
	for(var move of moves){
		var temp = place(vals,move,'X');
		if(checkVals(temp)=='X'){
			winMove=move;
		}
		if(checkVals(place(temp,move,'O'))=='O'){
			loseIfMoves.push(move);
		}
		temp = place(vals,move,'O');
		if(checkVals(temp)=='O'){
			loseMove=move;
		}
	}
	if(winMove>-1){
		return place(vals,winMove,'X');
	}
	else if(loseMove>-1){
		return place(vals,loseMove,'X');
	}
	else{
		var realMoves = [];
		if(loseIfMoves.length != moves.length){
			for(var i=0;i<moves.length;i++){
				var valid = true;
				for(var j=0;j<loseIfMoves.length;j++){
					if(loseIfMoves[j]==moves[i]){
						valid=false;
					}
				}
				if(valid){
					realMoves.push(moves[i]);
				}
			}
		}
		else{
			realMoves=moves;
		}
		return place(vals,realMoves[Math.floor(Math.random()*realMoves.length)],'X');
	}
}