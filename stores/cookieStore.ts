import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

export const useCookieStore = defineStore('cookie', () => {
  
    function setCookie(name:string,value:string,time:number){//time : 过期时间
        Cookies.set(name,value,{expires:time});
    }
    function getCookie(name:string){
        let value= Cookies.get(name)
        if(value===undefined){
            console.log('no cookie of '+name)
        }else{
            return value
        }
        return null
    }
    function deleteCookie(name:string) {
      // 删除名为 'name' 的 cookie
      Cookies.remove(name);
    }
  

  return { getCookie,setCookie,deleteCookie }
})
