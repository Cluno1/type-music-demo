import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useScreenStore = defineStore('screenStore', () => {
  const screen = reactive({
    screen:'desktop', //'tablet'|'phone'|'desktop'
    size:'default' , //small | default
  })

  return { screen }
})