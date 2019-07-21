/* eslint-disable */

const joi = require("joi");

module.exports = {
	register(req, res, next) {
		const schema = {
			username: joi.string(), // need to decide what params to use for usernames ???
			email: joi.string().email(),
			password: joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,32}$"))
		};

		const { error, value } = joi.validate(req.body, schema);

		if (error) {
			switch (error.details[0].context.key) {
				case "username":
					res.status(400).send({
						error: "Check username rules"
					});
					break;
				case "email":
					res.status(400).send({
						error: "Please provide valid email"
					});
					break;
				case "password":
					res.status(400).send({
						error: "Check password rules"
					});
					break;
				default:
					res.status(400).send({
						error: "Invalid registration information"
					});
			}
		} else {
			next();
		}
	}
};
