import vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.1.102:8080/'

/**
 * 设置拦截请求
 */
axios.interceptor.response.use((response) => {
	return response.data
}, (error) => {
	// 处理错误请求
	return Promise.reject(error)
})
// 绑定到vue原型中，在组件就可以 this.$http
Vue.prototype.$http = axios
