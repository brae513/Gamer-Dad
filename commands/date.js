

module.exports = {
	name: 'date',
	description: 'testing - not much functionality',
	random:true,
	client:false,
	execute(message, args) {
		try{
			var date = new Date();
			now.setHours(now.getHours()-8);
			console.log("Month:"+date.getMonth()+"\tDate:"+date.getDate()+"\tHours:"+date.getHours());
		}catch(err){
			console.log(err.stack);
		}
	},
};