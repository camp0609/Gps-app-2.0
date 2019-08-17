/* eslint-disable */
const authenticationController = require("./controllers/authenticationController");
const signUpAuthentication = require("./authentication/signUpAuthentication");
const userPostsController = require("./controllers/userPostsController");

module.exports = app => {
	app.post("/register",
		signUpAuthentication.register,
		authenticationController.register);

	app.post("/login", 
		authenticationController.login);

	app.post("/savePost",
		userPostsController.savePost);

};
