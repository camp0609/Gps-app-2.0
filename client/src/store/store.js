/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	state: {
		token: null,
		user: {},
		userLoggedIn: false
	},
	mutations: {
		SET_TOKEN(state, token) {
			state.token = token;
			if(token) {
				state.userLoggedIn = true;
			} else {
				state.userLoggedIn = false;	//not sure this else is needed
			}
		},

		SET_USER(state, user) {
			state.user = user;
		}
	},
	actions: {
		setToken({commit}, token) {
			commit('SET_TOKEN', token)
		},

		setUser({commit}, user) {
			commit('SET_USER', user)
		}
	}
});