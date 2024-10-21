import { createRouter, createWebHistory } from 'vue-router';
import Index from './views/Index.vue'; // 确保路径正确
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import NotFoundPage from './views/404.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // 使用 Vite 的环境变量
    routes: [
        {
            path: '/',
            redirect: '/index',
        },
        {
            path: '/index',
            name: 'index',
            component: Index,
        },
        {
            path: '/register',
            name: '/register',
            component: Register,
        },
        {
            path: '/login',
            name: '/login',
            component: Login,
        },
        {
            path: '/:catchAll(.*)',
            name: '/404',
            component: NotFoundPage,
        }
    ]
});

export default router;
