<template>
  <div class="video-layout" >
    <h1> this is a 接收方 video</h1>
      <video class="video" id="remoteVideo" autoplay /> 
      <video class="video" id="localVideo" autoplay /> 

    
  </div>
</template>
 
<script setup lang="ts">
import { watch } from 'vue';
import {useWebSocketStore} from '../../stores/webSocketStore'

let webSocketStore=useWebSocketStore()


const pc2 = new RTCPeerConnection();
pc2.addEventListener('icecandidate', async (e) => {
if (e.candidate) {
  webSocketStore.sendMessage('iceCandidate',['callCenter'],JSON.stringify(e.candidate))
}
});

watch(()=>webSocketStore.messageRespond.service,async (newVal)=>{
    if(newVal==='iceCandidate')
    await pc2.addIceCandidate(JSON.parse(webSocketStore.messageRespond.message))
    else if(newVal==='sdp')
    pullStream(JSON.parse(webSocketStore.messageRespond.message))
})

pc2.addEventListener('iceconnectionstatechange', (e) => {
console.log('pc2: iceconnectionstatechange', e);
});

pc2.addEventListener('track', (e) => {
if (e.streams.length > 0) {
remoteVideo.srcObject = e.streams[0];
}
});



async function pullStream(offer: RTCSessionDescriptionInit): Promise<void> {
pc2.setRemoteDescription(offer);
const answer = await pc2.createAnswer();
pc2.setLocalDescription(answer);
console.warn('answer', answer);
webSocketStore.sendMessage('sdp',['callCenter'],JSON.stringify(answer))
}


window.onload = async () => {
  var remoteVideo = document.querySelector('#remoteVideo') as HTMLVideoElement;
  var localVideo = document.querySelector('#localVideo') as HTMLVideoElement;
};
 
</script>



<style scoped lang="scss">
.video-layout{
  background-color: #ce4d4da1;
}

</style>