<script setup lang="ts">
import router from '../../../../router';
const turnBack=()=>router.go(-1)

import { useWebSocketStore } from '../../../../../stores/webSocketStore';
import { useRadioStore } from '../../../../../stores/radioStore';
import { useUSerStore } from '../../../../../stores/userStore';
import { onMounted } from 'vue';
const userStore=useUSerStore()
const webSocketStore=useWebSocketStore()
const radioStore=useRadioStore()


//发送信息
webSocketStore.sendMessage({
      service:'enterRoom',
      to:'',
      data:'enterRoom',
      from:userStore.userMessage.message.userName
   },[radioStore.radio.user])

onMounted(()=>{
    radioStore.initRadioConn(document.querySelector('#video'))
})



</script>

<template>
    <button @click="turnBack">返回</button>
    <div class="radio-live-layout">
        <div> 
            <video id="video" autoplay/>
        </div>
    </div>
   this is radio-live page
 
</template>

<style scoped lang="scss">

.radio-live-layout{
    width: 40rem;
    height: 30rem;
    background-color: #ffffff6e;
}

</style>
