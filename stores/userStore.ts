import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useUSerStore = defineStore('userStore', () => {
  const userMessage = reactive({
    isLogin:false,
    message:{
      userName:'james',
      userId:2
    }
  })


  return { userMessage }
})
