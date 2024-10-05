import { fa } from "element-plus/es/locales.mjs";
import { createI18n } from "vue-i18n";
import CallCenter from "../components/CallCenter.vue";

const messages= {

    en:{

        message: {
            aside:{
                home:'home',
                explore:'explore',
                find:'find',
                user:'user',
                userMessage:'user message',
                dataAnalyze:'data analyze',
                create:'create',
                submit:'submit',
                setting:'setting'
            },
            head:{
                dark:'dark',
                light:'light',
                search:'search',
                searchParam:'music /music list /radio',
                mail:'mail',
                subscribe:'subscribe',
                callCenter:'call center',
                login:'login',
            }
        }    

    },
    zh: {
        message: {
            aside:{
                home:'主页',
                explore:'探索',
                find:'发现',
                user:'用户',
                userMessage:'个人信息',
                dataAnalyze:'数据统计',
                create:'创作',
                submit:'上传',
                setting:'设置'
            },
            head:{
                dark:'暗黑',
                light:'白昼',
                search:'搜索',
                searchParam:'搜索歌曲/歌手/歌单/电台',
                mail:'私信',
                subscribe:'订阅',
                callCenter:'客服',
                login:'登录',
            }
        }  

    }
}

const i18n =createI18n({
    legacy:false,
    locale:'en',
    fallbackFormat:'en',
    messages,
})

export default i18n