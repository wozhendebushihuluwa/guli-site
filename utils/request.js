import axios from 'axios'
// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:8110',
  timeout: 5000 // 请求超时时间
})
export default service

// http request 拦截器
// service.interceptors.request.use(
//   config => {
//     // debugger
//     if (cookie.get('guli_token')) { // 如果cookie中包含guli_token
//       // 则发送后端api请求的时候携带token
//       config.headers['token'] = cookie.get('guli_token')
//     }
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

// export default service
