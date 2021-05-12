import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import cm from './base/commonMethods'

const app = createApp(App)
app.mount('#app')


// 全局属性
app.config.globalProperties.$cm = cm