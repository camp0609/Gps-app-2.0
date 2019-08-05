/* eslint-disable */
//need to adjust error messages
const { db } = require("../config/db.js");

module.exports = {
	async register(req, res) {
		try {
			db.query(
				"INSERT INTO users(username, email, password) VALUES(?, ?, ?)",
				[req.body.username, req.body.email, req.body.password], //check if I need req.body.username or can just use req.username
				(err, results, fields) => {
					if (!err) {
						res.send("it worked!");
						console.log("working");
					} else {
						console.log("error");
					}
				}
			);
		} catch (err) {
			res.status(500).send({
				error: "An error has occured while trying to sign up"
			});
		}
	},
	async login(req, res) {
		try {
			db.query(
				"SELECT FROM users * WHERE username = ? AND password = ?",
				[req.body.username, req.body.password],
				(err, results, fields) => {
					if (err) {
						res.status(400).send({
							error: "An error occured trying to login"
						});
					} else if (results.length > 0) {
						if (results[0].password === req.body.password) {
							// not sure this is right way to check login creds
							let user = results.toJson();
							res.send({
								currentUser: user
							});
						} else {
							res.status(403).send({
								//inccorect password
								error: "Login information was inccorect"
							});
						}
					} else {
						res.status(403).send({
							//incorrect username
							error: "Login information was inccorect"
						});
					}
				}
			);
		} catch (err) {
			res.status(500).send({
				error: "An error occured trying to login"
			});
		}
	}
};
