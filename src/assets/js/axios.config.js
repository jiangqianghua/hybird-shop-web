import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/'

/**
 * 设置拦截请求
 */
axios.interceptors.response.use((response) => {
  console.log('http响应拦截')
	return response.data.data
}, (error) => {
	// 处理错误请求
	return Promise.reject(error)
})
// 绑定到vue原型中，在组件就可以 this.$http
Vue.prototype.$http = axios
