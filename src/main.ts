import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css' // 引入黑暗模式样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import i18n from './i18n/i18n'


//设置为生产环境？？？
// process.env.NODE_ENV = 'development'



//全局定义css
// import './css/style.css'
import './css/style.scss'

import App from './App.vue'

// import { mockXHR } from '../mock'



//    mockXHR();



let app=createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(i18n)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}



app.mount('#app')
