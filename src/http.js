import axios from 'axios'
import { ElLoading } from 'element-plus'
import { nextTick } from 'vue'

// 创建一个loading实例的变量
let loadingInstance

// 请求拦截器
axios.interceptors.request.use(
    config => {
        // 在发送请求之前显示loading动画
        loadingInstance = ElLoading.service({
            lock: true,
            text: '加载中...',
            background: 'rgba(0, 0, 0, 0.7)'
        })

        return config
    },
    error => {
        // 发送请求错误时关闭loading并返回错误信息
        if (loadingInstance) {
            loadingInstance.close()
        }
        return Promise.reject(error)
    }
)

// 响应拦截器
axios.interceptors.response.use(
    response => {
        // 响应成功时关闭loading
        nextTick(() => {
            if (loadingInstance) {
                loadingInstance.close()
            }
        })

        return response
    },
    error => {
        // 响应错误时关闭loading并返回错误信息
        nextTick(() => {
            if (loadingInstance) {
                loadingInstance.close()
            }
        })

        return Promise.reject(error)
    }
)

// 创建注册用户的请求
const registerUser = async (userData) => {
    try {
        console.log('Sending data:', userData); // 输出即将发送的数据
        const response = await axios.post('/api/users/register', userData);
        return response.data; // 返回后端返回的响应数据
    } catch (error) {
        console.error('注册失败:', error.response?.data || error.message);
        throw error; // 继续抛出错误
    }
};


export default {
    registerUser,
    axios
};
