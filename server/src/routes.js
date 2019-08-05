const authenticationController = require('./controllers/authenticationController');
const registerControllerAuth = require('./authentication/registerControllerAuth');

module.exports = (app) => {
	app.post('/register', 
		registerControllerAuth.register,
		authenticationController.register);

	app.post('/login', 
		authenticationController.login);
};

