/* eslint-disable */

import Api from "./Api";

export default {
	getTrending() {
		return Api().get("getTrending");
	}
};
