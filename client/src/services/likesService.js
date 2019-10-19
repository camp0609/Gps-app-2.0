/* eslint-disable */

import Api from "./Api";

export default {
	likePost(credentials) {
		return Api().post("likePost", credentials);
	},
	likeComment(credentials) {
		return Api().post("likeComment", credentials);	
	}

};