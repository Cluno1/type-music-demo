import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css' // 引入黑暗模式样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


//echarts
import * as echarts from 'echarts';


//全局定义css
// import './css/style.css'
import './css/style.scss'

import App from './App.vue'

let app=createApp(App)


app.use(createPinia())
app.use(router)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}



app.mount('#app')
