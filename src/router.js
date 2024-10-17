import { createRouter, createWebHistory } from 'vue-router';
import Index from './views/Index.vue'; // 确保路径正确
import Register from './views/Register.vue';


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
        }
    ]
});

export default router;
