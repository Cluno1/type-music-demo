<script setup lang="ts">
import { onMounted, ref,onUnmounted, watch } from "vue";

// import Test from './test.vue'



import {useWebSocketStore} from '../../stores/webSocketStore'

const webSocketStore=useWebSocketStore()
const input=ref('')
let messageBorder;


onMounted(()=>{
  messageBorder=document.querySelector('.message')

})



const sendMessage=()=>{
  webSocketStore.sendMessage('callCenter',['someone'],input.value)
   //发送成功
  let newDIV=document.createElement('div')
  newDIV.className='call-center-layout-myself-message-item'
  let newSPAN=document.createElement('span')
  newSPAN.innerText=input.value
  input.value=''
  newDIV.appendChild(newSPAN)
  console.log(newDIV)
  messageBorder?.appendChild(newDIV)
}

watch(()=>webSocketStore.messageRespond.service,(newVal)=>{
    if(newVal==='callCenter'){
       let newDIV=document.createElement('div')
          newDIV.className='call-center-layout-other-message-item'
          let newSPAN=document.createElement('span')
          newSPAN.innerText=webSocketStore.messageRespond.message
          newDIV.appendChild(newSPAN)
          console.log(newDIV)          
          messageBorder?.appendChild(newDIV)
    }
})


//这里是本地
async function testVideo(){
      // 创建数据源 本地
    const localStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
    });
    // // 显示数据源，localVideo 是 html 中的 video 标签
    // localVideo.srcObject = localStream;

        // 本地实例
    const pc1 = new RTCPeerConnection();
    

        // 告诉对端，本端地址
    pc1.addEventListener('icecandidate', async (e) => {
      // 发送给对端  send
      webSocketStore.sendMessage('icecandidate',[],JSON.stringify(e.candidate))
      
    });


    // pc2.addEventListener('icecandidate', async (e) => {
    //   // 发送给本端
    //   // 本端添加对端地址
    //   if (e.candidate) {
    //   await pc1.addIceCandidate(e.candidate);
    //   }
    // });


        // 创建本端SDP,告诉本端浏览器支持哪些能力
    const offer = await pc1.createOffer();
    pc1.setLocalDescription(offer);
    webSocketStore.sendMessage('sdp',[],JSON.stringify(offer))

    // // 创建远端SDP,告诉远端浏览器支持哪些能力
    // const answer = await pc2.createAnswer();
    // pc2.setLocalDescription(answer);


    // 。。。。发送远端SDP给本端
    // 接收远端sdp,告诉远端浏览器支持哪些能力
    // pc1.setRemoteDescription(answer);

    // // 接收客户端sdp,告诉远端浏览器支持哪些能力
    // pc2.setRemoteDescription(offer);
}

</script>

<template>



 <div class="call-center-layout"> 
  <!-- <Test/> -->
      <button @click=testVideo> test video</button>
      <div class="title"> 客服中心</div>
      <div class="call-center-layout-message"> 
        <div class="message">

          <div class="call-center-layout-other-message-item">
            <span>ddd</span>
          </div>
        </div>
         <div class="message-input-layout"> 
          <input placeholder="输入内容" v-model=input @keyup.enter=sendMessage />
          <button  @click=sendMessage> 发送</button>
         </div>
      </div>
      
 </div>
    
</template>

<style  lang="scss">

.message{
  max-width: 30rem;
  overflow: scroll;
  height: 37rem;
  
}







</style>
