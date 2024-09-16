import { onMounted } from 'vue';
import { useUSerStore } from './../../stores/userStore';
import { createRouter, createWebHistory } from 'vue-router'

let userStore=null


  




const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/explore',
        name: 'explore',
        alias:'/',
        component:  () => import("../components/home/Explore.vue"),
        children:[
          {
            path: '/recommend',
            name: 'recommend',
            component:  () => import("../components/home/explore/Recommend.vue"),
          },
          {
            path: '/rank',
            name: 'rank',
            component:  () => import("../components/home/explore/Rank.vue"),
          },
          {
            path: '/songList',
            name: 'song-list',
            component:  () => import("../components/home/explore/SongList.vue"),
          },
          {
            path: '/radio',
            name: 'radio',
            component:  () => import("../components/home/explore/Radio.vue"),
          },
          {
            path: '/singer',
            name: 'singer',
            component:  () => import("../components/home/explore/Singer.vue"),
          },
         
        ],
      },
      {
        path: '/find',
        name: 'find',
        component: ()=> import('../components/home/Find.vue')
      },
      {
        path: '/userMessage',
        name: 'userMessage',
        component: ()=> import('../components/user/UserMessage.vue'),
        beforeEnter:(to,from,next)=>{
          userStore=useUSerStore();
            if(userStore.userMessage.isLogin){
              next()
            }else{
              if(confirm('当前尚未进行注册或者登录，是否需要现在进行登录？')){
                next('/login')
              }else{
                next(from.path)
              }
            }
        }
      },
      {
        path: '/dataAnalyze',
        name: 'dataAnalyze',
        component: ()=> import('../components/user/DataAnalyze.vue'),
        beforeEnter:(to,from,next)=>{
          userStore=useUSerStore();
            if(userStore.userMessage.isLogin){
              next()
            }else{
              if(confirm('当前尚未进行注册或者登录，是否需要现在进行登录？')){
                next('/login')
              }else{
                next(from.path)
              }
            }
        }
      },
      {
        path: '/login',
        name: 'login',
        component: ()=> import('../components/user/Login.vue')
      },
      {
        path: '/sign',
        name: 'sign',
        component: ()=> import('../components/user/Sign.vue')
      },
      {
        path:'/call-center',
        name:'call-center',
        component:()=> import('../components/CallCenter.vue')
      },
      {
        path: '/mail',
        name: 'mail',
        component: ()=> import('../components/mail/Mail.vue')
      },
      
     
     
    ]
  })
  
  export default router