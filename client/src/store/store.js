/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	state: {
		token: null,
		user: {},
		userLoggedIn: false,
		currentPostId: null,
		currentPost: null,
		makeComment: true,
		currentLat: null,
		currentLng: null
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
		},

		SET_POSTID(state, postId) {
			state.currentPostId = postId;
		},

		SET_POST(state, post) {
			state.currentPost = post;
		},

		SET_COMMENT(state, comment) {
			state.makeComment = comment;
		},
		SET_LAT(state, lat) {
			state.currentLat = lat;
		},
		SET_LNG(state, lng) {
			state.currentLng = lng;
		},
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