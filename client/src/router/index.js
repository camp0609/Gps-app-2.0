/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import map from "@/components/map.vue";
import carousel from "@/components/carousel.vue";
import signUp from "@/components/signUp.vue";
import camera from "@/components/camera.vue";
import login from "@/components/login.vue";
import userHome from "@/components/userHome.vue";
import frontPage from "@/components/frontPage.vue";
import postView from "@/components/posts/postView";
import mapView from "@/components/mapView.vue"; //try vue-scroll-behavior here

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
		},
		{
			path: "/camera",
			component: camera
		},
		{
			path: "/login",
			component: login
		},
		{
			path: "/userHome",
			component: userHome
		},
		{
			path: "/frontPage",
			component: frontPage
		},
		{
			path: "/postView",
			component: postView
		},
		{
			path: "/mapView",
			component: mapView
		},
	],
	// scrollBehavior: (to, from, savedPosition) => {
	// 	// if (to.hash) {
	// 	// 	return {
	// 	// 		selector: to.hash
	// 	// 	};
	// 	// }
	// 	if (savedPosition) {
	// 		return savedPosition;
	// 	} else {
	// 		return { x: 0, y: 0 };
	// 	}
	// }
});
