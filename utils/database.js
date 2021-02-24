const { Pool, Client } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

function getProfile(id){

}

function saveProfile(id,data){

}

function addDiegoBucks(id,amt){

}

function remDiegoBucks(id,amt){

}

function getDiegoBucks(id){

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
