import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import axios from './http.js'
import router from './router'
import store from './store'

// 先创建 app 实例
const app = createApp(App)

// 使用 ElementPlus 插件
app.use(ElementPlus)

// axios 设置
app.config.globalProperties.$axios = axios


// 使用路由和状态管理
app.use(router)
app.use(store)

// 使用 app 实例挂载
app.mount('#app') // 修改这一行，使用 app 实例挂载
