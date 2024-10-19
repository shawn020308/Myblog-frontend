import axios from "axios";
import { ElLoading } from 'element-plus'

const options = {

}
ElLoading.service(options)

const loadingInstance = ElLoading.service(options)
nextTick(() => {
    // Loading should be closed asynchronously
    loadingInstance.close()
})
// 请求拦截


// 相应拦截

export default axios;