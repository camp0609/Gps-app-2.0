const { db } = require("../config/db.js");

module.exports = {
	async saveComment(req, res) {
		try {
			let date = new Date(); //may need to save exact time of comment to show if it was 2hr old vs 18 hr old
			db.query("INSERT INTO comments(userId, comment, postId, date) VALUES(?, ?, ?, ?)",
				[req.body.userId, req.body.comment, req.body.postId, date],
				(err, results, fields) => {
					if(!err) {
						db.query("UPDATE posts SET comments = comments + 1 WHERE postId = ?",
							req.body.postId,
							(err, results, fields) => {
								if(!err) {
									res.sendStatus(200);
								} else {
									res.sendStatus(500);
								}
							});
					} else {
						console.log(err);
					}
				});
		} catch (err) {
			res.status(300).send({
				error: "An error occured, failed to save comment"
			});
		}
	},

	async getComments(req, res) {
		try {
			console.log(req.params.postId);
			db.query("SELECT * FROM comments WHERE postId = ?", //how many comments to show at 1 time, also just return likes/date/com?
				[req.params.postId],
				(err, results, fields) => {
					if(!err) {
						console.log(results);
						res.send(results);
					} else {
						console.log(err);
					}
				});
		} catch(err) {
			console.log(err);
		}
	},

	async saveReply(req, res) {
		try {
			console.log(req.body);
			let date = new Date();
			db.query("INSERT INTO comments(userId, comment, postId, date) VALUES(?, ?, ?, ?)",
				[req.body.userId, req.body.reply, req.body.postId, date],
				(err, results, fields) => { //need to delete first part if second part fails
					console.log(fields);
					if(!err){
						db.query("INSERT INTO replies(replyId, commentId) VALUES(?, ?)",
							[results.insertId, req.body.commentId],
							(err, results, fields) => {
								if(!err) {
									res.sendStatus(200);
								} else {
									res.sendStatus(500);
								}
							});
					} else {
						res.sendStatus(500);
					}
				});
		} catch(err) {
			console.log(err);
		}
	}

};