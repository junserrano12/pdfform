import Vue from "vue"
import Router from "vue-router"
import routes from "@/configs/routes.js"

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes
});

export default router;