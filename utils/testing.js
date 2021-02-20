const profile = require('./profile.js');
const commandUtil = require('./commandUtil.js');



//var cnt = profile.getDiegoBucks("tester2");
//console.log(cnt);
var cmds = commandUtil.getCommands();
for(var cmd of cmds){
	console.log(cmd.name);
}