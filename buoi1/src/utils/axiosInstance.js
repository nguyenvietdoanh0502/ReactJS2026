import axios  from "axios";
const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_SERVER}`,
    timeout: 5000,
    headers:{
        'Content-Type': 'application/json',
    }
})

axiosInstance.interceptors.request.use((config)=>{
    const token = localStorage.getItem('access_token')
    if(token){
        config.headers.Authorization = `Bearer ${token}`

    }
    return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use((response)=>{
    return response.data;
},
(error)=>{
    if(error.response && error.response.status ==401){
        alert("Phiên bản đăng nhập hết hạn, vui lòng đăng nhập lại!")
    }
    return Promise.reject(error)
}
)

export default axiosInstance;

