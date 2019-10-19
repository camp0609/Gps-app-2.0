/* eslint-disable */

import Api from "./Api";

export default {
	saveComment(credentials) {
		return Api().post("saveComment", credentials);
	},
	getComments(postId) {
		return Api().get(`getComments/${postId}`);
	},
	saveReply(credentials) {
		return Api().post("saveReply", credentials);
	}

};