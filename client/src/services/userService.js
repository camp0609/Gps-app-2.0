/* eslint-disable */

import Api from "./Api";

export default {
	savePost(credentials) {
		return Api().post("savePost", credentials);
	},

	getPosts(userId) {
		return Api().get(`getPosts/${userId}`);
	}
};
