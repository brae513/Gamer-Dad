var db;

function init(pool){
	db=pool;
}

function init(){
	const { Pool } = require ('pg');  
	db = new Pool({
		connectionString: process.env.DATABASE_URL,
		ssl: {
			rejectUnauthorized: false
		}
	});
	db.connect();
}

function query(query){
	try{
		db.query(query, (err, res) => {
			if (err) throw err;
			return res;
		});

	} catch(err) {
		console.log(err);
	}
	return null;
}

function query2(query,values ){
	try{
		db.query(query,values, (err, res) => {
			if (err) throw err;
		});

	} catch(err) {
		console.log(err);
	}
	return null;
}

async function aQuery(query){
	try{
		await db.query(query, (err, res) => {
			if (err) throw err;
			return res;
		});

	} catch(err) {
		console.log(err);
	}
	return "Error";
}
async function aQuery2(query,values){
	try{
		await db.query(query,values,(err, res) => {
			if (err) throw err;
			return res;
		});

	} catch(err) {
		console.log(err);
	}
	return "Error";
}
module.exports= {
	init,
	query
};