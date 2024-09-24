<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue';
import { useGridBoxStore } from '../../../../../stores/gridBoxStore';

import router from '../../../../router';
import { useWebSocketStore } from '../../../../../stores/webSocketStore';
import { useRadioStore } from '../../../../../stores/radioStore';
import { useUSerStore } from '../../../../../stores/userStore';

const webSocketStore=useWebSocketStore()
const radioStore=useRadioStore()
let gridBoxStore=useGridBoxStore()
const userStore=useUSerStore()


//初始化的箱子对象
let radioBox;

//radio箱子的子类
let testItem;

let m; //数组，记录了每一个子类item的所有信息

//radioNum

const radioNum=ref(0);

 //获取电台数据记录。。。
   //websocket
   webSocketStore.sendWSMessage('getRadioAll',"");
   watch(()=>webSocketStore.messageRespond.on,async (newVal)=>{
      if(newVal){
         
         if(webSocketStore.messageRespond.message.service==='radioAll'){
            webSocketStore.messageRespond.on=false
            m=JSON.parse(webSocketStore.messageRespond.message.data)//m是数组
            radioNum.value=m.length//箱子子类item重复多少次
            await nextTick();
            
               testItem=document.querySelectorAll('.radio-layout-grid-item')
            //初始化grid盒子
            radioBox=gridBoxStore.initBox(
            'radioBox',
            document.querySelectorAll('.radio-name'),
            document.querySelectorAll('.radio-creator'),
            document.querySelectorAll('.radio-signature'),
            document.querySelectorAll('.radio-created-time'),
            document.querySelectorAll('.radio-layout-grid-item-img')
            )

            let title=[]
            let usrName=[]
            let signature=[]
            for(let i in m){
               title.push(m[i].title)
               usrName.push(m[i].user.userName)
               signature.push(m[i].signature)

            }

            
            radioBox.gridBoxAddMessage(title,usrName,signature,['2024/4/5'],['/src/assets/pictureHolder/1.png'])
            
          

           
         }
        
      }
   })





function turnRadioLive(key){
   console.log(m[key])

  
   //把需要连接的radio博主的user和userId存储在store里面
   radioStore.radio.user=m[key].user
   radioStore.radio.radioId=m[key].radioId

   
   //路由
   router.push('/radio-live')
}


</script>

<template>
    
   <div class="radio-layout">
      <div class="radio-layout grid-layout"> 
                
               <div 
                class="radio-layout-grid-item grid-layout-item" 
                v-for="n in radioNum"
                :key="n-1"
                @click=turnRadioLive(n-1)
                >
                    <img class="radio-layout-grid-item-img">
                    <div class="radio-layout-grid-item-radioMessage"> 
                            <div class="radio-name"></div> 
                            <div class="radio-creator"></div>
                            <div class="radio-signature"> </div>
                            <div class="song-created-time"></div>                           
                    </div>
                </div>
      </div>
   </div>

   
 
</template>

<style scoped lang="scss">

   .radio-layout{
      width: 100%;
      height: auto;
      
      grid-template-columns: repeat(auto-fill,minmax(13rem,1fr)); 
      
      .radio-layout-grid-item{
         width: 13rem;
         height: 22rem;
         img{
          width: 100%;
          height: 70%;       
        }
        .radio-layout-grid-item-radioMessage{
         display: flex;
          flex-direction: column;
          align-items: center;
          justify-self: center;         
          gap: 0.3rem;
        }
      }
   }
</style>
