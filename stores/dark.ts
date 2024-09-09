import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useDarkStore = defineStore('dark', () => {
  const dark = ref(false)

  return { dark }
})