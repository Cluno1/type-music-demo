import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        alias:["/home"],
        component:  () => import("../components/HelloWorld.vue")
      }
      
     
     
    ]
  })
  
  export default router