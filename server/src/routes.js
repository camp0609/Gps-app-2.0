const registerController = require('./controllers/registerController');
const registerControllerAuth = require('./authentication/registerControllerAuth');

module.exports = (app) => {
	app.post('/register', 
		registerControllerAuth.register,
		registerController.register);
};

// app.get('/createdb', (req, res) =>{
// 	let sql = 'CREATE DATABASE gpsdb';
// 	db.query(sql, (err, result) =>{
// 		if(err){
// 			throw err;
// 		}
// 		res.send('db created');
// 		console.log(result);
// 	});
// });
