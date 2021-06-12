const db = require('./utils/database.js');

function init(){
	var res = db.query('SELECT msg_id FROM schedules');
}
module.exports = {
	name: 'schedule',
	description: 'Schedules an event.',
	random:false,
	client:false,
	execute(message, args) {
		try{
			if(args.length!=3 && args.length!=4){
				message.channel.send("Incorrect syntax:\nCorrect syntax: !schedule event_name event_description date (optional)recurrence");
			}
			else{
				console.log(args);
				var event_name = args[1];
				var event_description = args[2];
				var date = args[3];
				var creator_id = message.author.id;
				if(args.length==4){
					var recurrence = args[4];
					db.query('INSERT INTO schedules(creator_id,date,event_name,event_description,recurrence) VALUES ('+creator_id+','+date+','+event_name+','+event_description+','+recurrence+');');
				}
				else{
					db.query('INSERT INTO schedules(creator_id,date,event_name,event_description) VALUES ('+creator_id+','+date+','+event_name+','+event_description+');');
				}
			}
		}catch(err){
			console.log(err.stack);
		}
	},
};