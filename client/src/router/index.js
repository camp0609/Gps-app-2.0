/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import map from "@/components/map.vue";
import carousel from "@/components/carousel.vue";
import signUp from "@/components/signUp.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			component: map
		},
		{
			path: "/carousel",
			component: carousel
		},
		{
			path: "/signUp",
			component: signUp
		}
	]
});
