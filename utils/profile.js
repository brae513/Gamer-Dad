const fs = require('fs');

const defaultRaw = {
	name: 'nobody',
	diegoBucks: 0
};
const defaultData = JSON.stringify(defaultRaw);

function getProfile(id){
	var dir = '../profiles/'+id+'.json';
	try{
		return fs.readFileSync(dir);
	} catch(err) {
		if(err.code=='ENOENT'){
			fs.writeFileSync(dir,defaultData);
			return defaultData;
		}
		else{
			console.log(err);
		}
	}	
}

function saveProfile(id,data){
	var dir = '../profiles/'+id+'.json';
	try{
		fs.writeFileSync(dir,JSON.stringify(data));
	} catch(err) {
		console.log(err);
	}

}

function addDiegoBucks(id,amt){
	var rawData = getProfile(id);
	var prof = JSON.parse(rawData);
	prof.diegoBucks+=amt;
	saveProfile(id,prof);
}

function remDiegoBucks(id,amt){
	var rawData = getProfile(id);
	var prof = JSON.parse(rawData);
	if(prof.diegoBucks<amt){
		return false;
	}
	prof.diegoBucks-=amt;
	saveProfile(id,prof);
}

function getDiegoBucks(id){
	var rawData = getProfile(id);
	var prof = JSON.parse(rawData);
	return prof.diegoBucks;
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
