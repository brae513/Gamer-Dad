const Discord = require('discord.js');
const fs = require('fs');

const lastFrame = 7549;
const delay = 1000;
const path = './utils/badApple/';

var msg;
var curSpot = 0;
var spd = 1;

function start(message,speed){
	curSpot = 10000;
	setTimeout(() => {
		msg=message;
		curSpot = 0;
		spd=speed;
		if(spd<1){
			spd=1;
		}
		console.log(spd);

		nextFrame();
	},delay*10);
	
}

function nextFrame(){
	if(curSpot<lastFrame){
		var nextPath = path+'frame'+curSpot+'.txt';
		var nextString = fs.readFileSync(nextPath).toString('utf8');
		msg.edit('\`\`\`'+nextString+'\`\`\`').then(message=>{
			curSpot+=spd;
			setTimeout(() => { nextFrame()},delay);
		});
	}
	else{
		msg.edit('\`\`\`The End\`\`\`')
	}
}

module.exports = {
	start
};

//console.log(nextFrame());

