import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', () => {
  const data = ref([])


  return { data }
})
