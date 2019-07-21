/* eslint-disable */

const { db } = require("../config/db.js");

module.exports = {
	async register(req, res) {
		db.query(
			"INSERT INTO users(username, email, password) VALUES(?, ?, ?)",
			[req.body.username, req.body.email, req.body.password],
			(err, results, fields) => {
				if (!err) {
					res.send("it worked!");
					console.log("working");
				} else {
					console.log("error"); 
				}
			}
		);
	}
};
