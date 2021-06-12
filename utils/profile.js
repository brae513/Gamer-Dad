const fs = require('fs');
const db = require('./utils/database.js');

const profile_table = "profiles";

const defaultRaw = {
	name: 'nobody',
	diegoBucks: 0
};
//const defaultData = JSON.stringify(defaultRaw);

function getProfile(id){
	aQuery("select * from );
}

function saveProfile(id,data){

}

function addDiegoBucks(id,amt){
	
}

function getDiegoBucks(id){
	res = db.query('SELECT diego_bucks FROM '+profile_table+' WHERE id = '+id+';');
	console.log(res);
	return res;
}

module.exports = {
	init,
	getProfile,
	query,
	saveProfile,
	addDiegoBucks,
	remDiegoBucks,
	getDiegoBucks
};
//var cnt = getDiegoBucks("tester");
//console.log(cnt);
