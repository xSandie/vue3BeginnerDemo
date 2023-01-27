import axios from 'axios'  
import { ElMessage } from 'element-plus';

const service = axios.create({
    baseURL:import.meta.env.VITE_BASE_API,
    timeout: 5000
})

service.interceptors.request.use(config => {
    config.headers.Authorization = localStorage.getItem("token")
    return config
}, error => {
    return Promise.reject(new Error(error))
})

service.interceptors.response.use(
    (response)=>{
        // console.log(response);
        ElMessage.success("请求成功")
        return response
    },
    (error)=>{

    }
    )
export default service