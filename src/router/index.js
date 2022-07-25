import { createRouter , createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../pages/Home.vue'),
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import(/* webpackChunkName: "projects" */ '../pages/Projects.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue'),
    }

]

const router =  createRouter({
    history : createWebHistory(),
    routes,
    linkActiveClass: 'text-primary underline',
    // linkExactActiveClass: 'exact-active-li=k',
})
export default router 