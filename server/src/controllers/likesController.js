const { db } = require("../config/db.js");

module.exports = {
	async likePost(req, res) {
		try {
			console.log([
				req.body.userId,
				req.body.longitude,
				req.body.latitude,
				req.body.message
			]);
			db.query(
				"INSERT INTO postLikes(userId, postId) VALUES(?, ?)",
				[req.body.userId, req.body.postId],
				(err, results, fields) => {
					if (!err) {
						db.query(
							"UPDATE posts SET likes = likes + 1 WHERE postId = ?",
							req.body.postId,
							(err, results, fields) => {
								if (!err) {
									res.send("post liked"); //not exactly sure what should be sent back when someone likes a post?
								} else {
									console.log(err);
								}
							}
						);
					} else {
						console.log(err);
					}
				}
			);
		} catch (err) {
			res.status(err).send({
				error: "An error saving your post"
			});
		}
	},

	async unlikePost(req, res) {
		try {
			db.query(
				"INSERT INTO commentLikes(userId, commentId) VALUES(?, ?)",
				[req.params.userId, req.body.commentId],
				(err, results, fields) => {
					if (!err) {
						db.query(
							"UPDATE coments SET replies = replies + 1 WHERE commentId = ?",
							req.body.commentId,
							(err, results, fields) => {
								if (!err) {
									let status = 1;
									res.send(status);
								} else {
									let status = 0;
									res.send(status);
								}
							}
						);
					} else {
						console.log(err);
					}
				}
			);
		} catch (err) {
			console.log("something went wrong unliking post");
		}
	},

	async likeComment(req, res) {
		try {
			db.query(
				"INSERT INTO commentLikes(userId, commentId) VALUES(?, ?)",
				[req.body.userId, req.body.commentId],
				(err, results, fields) => {
					if (!err) {
						db.query(
							"UPDATE comments SET likes = likes + 1 WHERE commentId = ?",
							req.body.commentId,
							(err, results, fields) => {
								if (!err) {
									res.sendStatus(200);
								} else {
									res.sendStatus(200);
								}
							}
						);
					} else {
						console.log(err);
					}
				}
			);
		} catch (err) {
			console.log("something went wrong unliking post");
		}
	}
};
