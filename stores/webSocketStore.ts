import { ref, reactive, onMounted } from 'vue'
import { defineStore } from 'pinia'
import Stomp from 'stompjs'
import SockJS from 'sockjs-client'

export const useWebSocketStore = defineStore('webSocket', () => {
    

     
    const url = 'ws://localhost:8887';
    //获取用户cookie信息 ...
    const user = { userId: 'user', token: 'abcde' };

  //创建一个url和查询参数
    const urlWithParams = new URL(url);
    
    const socket = ref(null);
    const messageRespond=reactive({
      service:null,
      message:null,
    })
    // let messageBorder;
    onMounted(()=>{
             // 创建 WebSocket 实例
        socket.value = new WebSocket(url);
        


urlWithParams.searchParams.append('userId', user.userId);
urlWithParams.searchParams.append('token', user.token);

const socket = new WebSocket(urlWithParams.href);


        // 监听打开事件
        socket.value.onopen = () => {
          console.log('WebSocket connection established');
        };
    
        // 监听消息事件
        socket.value.onmessage = (event) => {
          let message=event.data
          console.log('Received:', event.data);
          const m=JSON.parse(message)
          messageRespond.service=m.service;
          messageRespond.message=m.data;
        
          // let newDIV=document.createElement('div')
          // newDIV.className='call-center-layout-other-message-item'
          // let newSPAN=document.createElement('span')
          // newSPAN.innerText=message
          // newDIV.appendChild(newSPAN)
          // console.log(newDIV)          
          // messageBorder?.appendChild(newDIV)
        };
    
        // 监听错误事件
        socket.value.onerror = (error) => {
          console.error('WebSocket error:', error);
        };
    
        // 监听关闭事件
        socket.value.onclose = () => {
          console.log('WebSocket connection closed');
        };
    })

    function sendMessage(service:String,to:Array<String>,message:String|null){
        if(message){
         
          let m={
            service:service,
            to:to,
            data:message
          }

          //发送。。。
          socket.value.send(JSON.stringify(m));
      
        }else{
          alert('不能发送空消息')
        }
      }

    

    

  return { sendMessage,messageRespond }
})