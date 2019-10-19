/* eslint-disable */
const authenticationController = require("./controllers/authenticationController");
const signUpAuthentication = require("./authentication/signUpAuthentication");
const userPostsController = require("./controllers/userPostsController");
const likesController = require("./controllers/likesController");
const commentsController =require("./controllers/commentsController");

module.exports = app => {
	app.post("/register",
		signUpAuthentication.register,
		authenticationController.register);

	app.post("/login", 
		authenticationController.login);

	app.post("/savePost",
		userPostsController.savePost);

	app.get("/getPosts/:userId",
		userPostsController.getPosts);

	app.post("/likePost",
		likesController.likePost);

	app.post("/saveComment",
		commentsController.saveComment);

	app.get("/getComments/:postId",
		commentsController.getComments);

	app.post("/likeComment",
		likesController.likeComment);

	app.post("/saveReply",
		commentsController.saveReply);
	
};
