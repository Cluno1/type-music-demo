import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/explore',
        name: 'explore',
        alias:["/"],
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
            path: '/song-list',
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
         
        ]
      },
      {
        path: '/find',
        name: 'find',
        component: ()=> import('../components/home/Find.vue')
      }
      
     
     
    ]
  })
  
  export default router