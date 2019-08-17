const { db } = require("../config/db.js");
const fs = require('fs')

module.exports = {
	async savePost(req, res) {
		try {
			console.log(req.body.userId);
			// console.log([req.body.user, req.body.longitude, req.body.latitude, req.body.message]);
			// db.query("INSERT INTO posts(userId, longitude, latitude, message) VALUES(?, ?, ?, ?)",
			// 	[req.body.user.userId, req.body.longitude, req.body.latitude, req.body.message],
			// 	(err, results, fields) => {
			// 		if(!err) {
			// 			let postId = result.insertId;
			// 			let originalBase64 = req.body.base64;
			// 			let data = originalBase64.replace(/^data:image\/png;base64,/, "");
			// 			let buffer = new Buffer(data, "base64");
			// 			fs.writeFile('image' + postId + '.png', buffer);
			// 			res.send('it worked');
			// 			console.log('file was saved');
			// 		} else {
			// 			console.log(err);
			// 		}
			// 	});
		} catch (err) {
			res.status(300).send({
				error: "An error saving your post"
			});
		}
	},

	async getPosts() {
		try {
			db.query("SELECT * FROM posts WHERE userId = ?", //will need to figure out how many posts to return intially, prob by most recent
				[req.body.userId],
				(err, results, fields) => {
					if(!err) {
						res.send(results);
					} else {
						console.log(err);
					}
				})
		} catch(err) {

		}
	}

};
