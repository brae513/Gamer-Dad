const Discord = require('discord.js');
const fs = require('fs');

const lastFrame = 7549;
const delay = 500;
const path = './utils/badApple/';

var msg;
var curSpot = 0;

function start(message){
	msg=message;
	curSpot = 50;
	nextFrame();
}

function nextFrame(){
	if(curSpot<lastFrame){
		var nextPath = path+'frame'+curSpot+'.txt';
		var nextString = fs.readFileSync(nextPath).toString('utf8');
		msg.edit('\`\`\`'+nextString+'\`\`\`');
		curSpot++;
		setTimeout(() => { nextFrame()},delay);
	}
}

module.exports = {
	start
};

//console.log(nextFrame());

