import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);


const routes: Array<RouteConfig> = [
	{
		path: "/",
		name: "welcome",
		component: () => import("./page/Welcome.vue")
	},
	{
		path: "/join-us",
		name: "join us!",
		component: () => import("./page/JoinUs.vue")
	}
];

const router = new VueRouter(
	{
		mode: "hash",
		base: process.env['BASE_URL'],
		routes
	}
);

export default router