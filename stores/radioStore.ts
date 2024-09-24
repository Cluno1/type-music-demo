import { ref, reactive, watch } from 'vue'
import { defineStore } from 'pinia'
import {useWebSocketStore} from './webSocketStore'

export const useRadioStore = defineStore('radioStore', () => {

        const webSocketStore=useWebSocketStore()
        const radio=reactive({
            radioId:0,
            user:{
                userName:'',
                userId:0
            }
        })

        async function initRadioConn(remoteVideo){
            console.log('come into initRadioConn -- radioStore - 17')
            let pc1 = new RTCPeerConnection();
            
            
            
            watch(()=>webSocketStore.messageRespond.on,async (newVal)=>{
                if(newVal){
                    if(webSocketStore.messageRespond.fromUser.userId==radio.user.userId){
                        webSocketStore.messageRespond.on=false
                        if(webSocketStore.messageRespond.message.service=='iceCandidate'){
                            console.log('receive ice')
                            pc1.addIceCandidate(JSON.parse(webSocketStore.messageRespond.message.data))
                        }else if(webSocketStore.messageRespond.message.service=='sdp'){
                            console.log('receive sdp')
                            pc1.setRemoteDescription(JSON.parse(webSocketStore.messageRespond.message.data))
                            const answer = await pc1.createAnswer();
                            pc1.setLocalDescription(answer);
                            pc1.addEventListener('icecandidate', (e) => {
                                if (e.candidate) {
                                    console.log('ready to send ice --21')
                                    webSocketStore.sendMessage({
                                        service:'iceCandidate',
                                        to:'',
                                        data:JSON.stringify(e.candidate),
                                        from:''
                                    },[radio.user])
                                }
                            });
                            pc1.addEventListener('icecandidateerror', (event) => {
                                console.error('ICE candidate error:', event);
                            });
                            pc1.addEventListener('icegatheringstatechange', () => {
                                console.log('ICE gathering state changed:', pc1.iceGatheringState);
                            });

                            webSocketStore.sendMessage({
                                service:'sdp',
                                to:'',
                                data:JSON.stringify(answer),
                                from:''
                            },[radio.user])
                        }
                    }
                }
                
            })
            pc1.addEventListener('track', (e) => {
                console.log('yes is come to remoteVideo 挂载 --64')
                if (e.streams.length > 0) {
                remoteVideo.srcObject = e.streams[0];
                }
            })
            
        }

        return { radio,initRadioConn}


})
