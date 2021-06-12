const fs = require('fs');
const db = require('./database.js');

const profile_table = "profiles";


function getProfile(id){
	db.query('select * from '+profile_table+' where id = '+id+';');
}

function saveProfile(id,data){

}

function addDiegoBucks(id,amt){
	
}
function remDiegoBucks(id,amt){
}
function getDiegoBucks(id){
	res = db.query('SELECT diego_bucks FROM '+profile_table+' WHERE id = '+id+';');
	if(res==null){
		createProfile(id);
	}
	console.log(res);
	return res;
}
function createProfile(id){
	db.query('insert into '+profile_table+'(id,diego_bucks) VALUES (' +id+', 0');
}
module.exports = {
	getProfile,
	saveProfile,
	addDiegoBucks,
	remDiegoBucks,
	getDiegoBucks
};
//var cnt = getDiegoBucks("tester");
//console.log(cnt);
