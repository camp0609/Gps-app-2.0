/* eslint-disable */ 
//on signUp.js button to register a new user
import Api from "./Api";

export default {
	register(credentials) { // credentials are the inputs from the signUp form 
		return Api().post("register", credentials); // pointing to the register endpoint (insert user info into db)
	}
};
