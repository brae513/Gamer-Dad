const Discord = require('discord.js');
const fs = require('fs');

const lastFrame = 7549;
const delay = 500;
const path = './utils/badApple/';

var msg;
var curSpot = 0;
var spd = 1;

function start(message,speed){
	msg=message;
	curSpot = 0;
	spd=speed;
	nextFrame();
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
}

module.exports = {
	start
};

//console.log(nextFrame());

