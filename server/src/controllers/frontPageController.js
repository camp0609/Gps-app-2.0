const { db } = require("../config/db.js");
const fs = require('fs')

module.exports = {

	async getTrending() {
		try {
			db.query("SELECT * FROM posts WHERE date >= now() - INTERVAL 1 DAY AND ", //will need to figure out how many posts to return intially
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
