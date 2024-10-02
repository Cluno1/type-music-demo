<script setup lang="ts">
import { nextTick, onMounted, ref, watch, watchEffect } from 'vue';
import { useAudioStateStore}from '../../stores/audioStateStore'

import { ElLoading } from 'element-plus'
import { Rank } from '@element-plus/icons-vue'



let isfold=ref(false)

let loadingInstance=null

let loading=(target:string)=>{
  const loadingInstance=ElLoading.service({
    target:target
  })
  return loadingInstance
}

let audioStateStore=useAudioStateStore()
let audio;
onMounted(()=>{
    audioStateStore.test();
    audioStateStore.test();
    audioStateStore.test();
    audio=document.querySelector('audio')
    
          audio.addEventListener("durationchange", () => {
            
            // 更新歌曲时长状态
            audioStateStore.playState.duration = audio.duration;
            // 开启歌曲时长信息获取完毕标识
            audioStateStore.playState.isDuration = true;
            
          });
          // 缓冲足以播放
          audio.addEventListener("canplaythrough", () => {
                  // 取消进度条加载状态
                  loadingInstance?.close()
                  audioStateStore.playState.isDragProgress=true
          });
        
          // 因为缓冲被暂停
          audio.addEventListener("waiting", () => {
              // 开启进度条加载状态
              loadingInstance=loading('.audio-bar')
              audioStateStore.playState.isDragProgress=false
          });
           // 	播放进度改变
          audio.addEventListener("timeupdate", () => {
              audioStateStore.playState.progress=audio.currentTime
          })

   
    
    watch(()=>audioStateStore.playState.play,(newVal)=>{
      if(newVal){
        audio.play()
      }else{
        audio.pause()
      }
    });
    
    watch(()=>audioStateStore.playState.index,()=>{

      audioStateStore.playState.isDragProgress=false
      audioStateStore.playState.progress=0
      audioStateStore.playState.play=false
      audio.load()
      nextTick(()=>audioStateStore.playState.play=true)
    })

    watch(()=>audioStateStore.playState.progress,(newVal)=>{
      
      if(audioStateStore.playState.isDuration){ 
          if(newVal==audio.duration){
            audioIndexChange(audioStateStore.playState.playOrder)
            return
          }
          
          let bar:HTMLElement|null=document.querySelector('.bar-gray')
          if(bar){
            let totalWidth=bar.parentElement.offsetWidth
            bar.style.width = totalWidth*newVal/audioStateStore.playState.duration+'px'
            console.log(bar.style.width)
          }
          

        

      }
    })
})

function audioIndexChange(option:'pre'|'aft'|number|'random'|'loop'|'along'){
  if(audioStateStore.playState.playList.length){
    switch(option){
      case 'pre':
        if(audioStateStore.playState.index<=0){
          audioStateStore.playState.index=audioStateStore.playState.playList.length-1
        }else{
          audioStateStore.playState.index-=1;
        }
        break;
      case 'loop':
      case 'aft':
        if(audioStateStore.playState.index>=audioStateStore.playState.playList.length-1){
          audioStateStore.playState.index=0
        }else{
          audioStateStore.playState.index+=1;
        }
        break;
      case 'along':
        audioStateStore.playState.isDragProgress=false
        audioStateStore.playState.progress=0
        audioStateStore.playState.play=false
        audio.load()
        nextTick(()=>audioStateStore.playState.play=true)
        break;
      case 'random':
        // 生成一个介于min（包含）和max（不包含）之间的随机整数
        function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min;
        }
        let randomInt = getRandomInt(0, audioStateStore.playState.playList.length); // 生成一个1到9之间的随机整数
        if(randomInt==audioStateStore.playState.index){
          if(audioStateStore.playState.index>=audioStateStore.playState.playList.length-1){
            audioStateStore.playState.index=0
          }else{
            audioStateStore.playState.index+=1;
          }
        }else{
          audioStateStore.playState.index=randomInt;
        }
        break;
      default:
         if(typeof option =='number'){
          audioStateStore.playState.index=option
         }
         break;

    }
  }
  
}
function changeOrder(){
  if(audioStateStore.playState.playOrder=='along'){
    audioStateStore.playState.playOrder='loop'
  }else if(audioStateStore.playState.playOrder=='loop'){
    audioStateStore.playState.playOrder='random'
  }else if(audioStateStore.playState.playOrder=='random'){
    audioStateStore.playState.playOrder='along'
  }
}

function formatTime(seconds:number) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  let formattedSeconds=String(remainingSeconds).padStart(2,'0')
  return minutes + ':' + Number(formattedSeconds).toFixed(0);
}

function changeProgress(event){

  if(audioStateStore.playState.isDragProgress){
    let container = event.currentTarget;
    let containerWidth = container.offsetWidth; //

    let clickPosition = event.clientX - container.getBoundingClientRect().left;
    let percentage = (clickPosition / containerWidth) ;

    // Limit the percentage between 0 and 100
    percentage = Math.max(0, Math.min(100, percentage));
    
    audio.currentTime=audio.duration*percentage
    // audioStateStore.playState.progress=audio.duration*percentage
  }
 
  
}




</script>

<template>

    <div class="audio-footer-fold">
        <div class=" icon-fangda iconfont " v-show="isfold" @click="isfold=false">播放器</div> 
        <div class="footer-fold-line"> </div>
    </div>
  <div class="audio-footer" v-show="!isfold"> 
 

      <div class="audio-layout">
        <div class="audio-body"> 
        <audio
            
            :src='audioStateStore.playState.playList[audioStateStore.playState.index]?.songURL'
            
        ></audio>
        <div class="audio-img" >
          <img :src="audioStateStore.playState.playList[audioStateStore.playState.index]?.songImg"> 
        </div>
        <div class="audio-context">
          
          <div class="audio-title">
            <div class="audio-title"> 
                <h3>
                  {{ audioStateStore.playState.playList[audioStateStore.playState.index]?.songName }}
                </h3>
                <p>-- {{ audioStateStore.playState.playList[audioStateStore.playState.index]?.songSinger }}</p>
            </div>
            <div class="iconfont icon-suoxiao" @click="isfold=true"> </div>
          </div>
          
          <div class="audio-controllers">

            <div class="audio-controller-pre"> 
              <div class="audio-speed iconfont icon-bofangsudu"/>
              <div :class="['audio-volume', 'iconfont',audioStateStore.playState.volume===0?'icon-volumnMute_1': ' icon-volumnLouder_1']"/> 
              <div :class="['audio-playOrder', 'iconfont',audioStateStore.playState.playOrder==='loop'?'icon-bofang-xunhuanbofang':audioStateStore.playState.playOrder==='along'?'icon-a-27Fdancixunhuanbofang':'icon-xunhuanbofang' ]" @click="changeOrder" />                           
            </div> 
            
            <div class="audio-controller-middle"> 
              <div class="audio-pre iconfont icon-shangyishou_huaban" @click="audioIndexChange('pre')"/>
              <div :class="['audio-play', 'iconfont',audioStateStore.playState.play? 'icon-bofang':'icon-bofanganniu']" @click="audioStateStore.playState.play=!audioStateStore.playState.play;"/>
              <div class="audio-aft iconfont icon-xiayishou_huaban" @click="audioIndexChange('aft')"/>
            </div>
          
            <div :class="['audio-musicList', 'iconfont',audioStateStore.playState.playList.length===0?'icon-MuteOutline': 'icon-music-list']" @click="audioStateStore.playState.isShowList=!audioStateStore.playState.isShowList"/>
              
          </div>
          
          <div class="audio-bar">
            <div class="audio-bar-time-start" @click="audio.currentTime=0">{{ formatTime(audioStateStore.playState.progress) }} </div>  
            <div class="audio-bar-progress" @click="changeProgress"><div class="bar-gray"/></div> 
            <div class="audio-bar-time-end">{{ formatTime(audioStateStore.playState.duration) }} </div>
          </div>
        </div>
        
        </div>
        <div class="audio-show-musicList" v-show="audioStateStore.playState.isShowList"> 
      <div class="audio-musicList-item" 
        v-for="(song,index) in audioStateStore.playState.playList"
        :key="index"
        @click="audioIndexChange(index)"
      > 
        <div :class="audioStateStore.playState.index==index?'item-current':''"></div>
        <strong>{{ index+1 }}.</strong>
        <h4>{{ song.songName }}</h4>
        <p>-- {{ song.songSinger}}</p>

      </div>
        </div>
      </div>

  </div>
 
</template>

<style scoped lang="scss">
@import url("//at.alicdn.com/t/c/font_4700497_7o6h89vetw3.css");
.iconfont{
    font-size: 2rem;
}

.audio-footer-fold{
    position: absolute;
    bottom: 0%;
    display: flex;
    color: #e86f6f;
    
    align-items: flex-end;
    .iconfont{
        font-size: 20px;
    }
    
    .footer-fold-line{
        width: 40rem;
        height: 5px;
        background-color: #ce7171;
    }
}


.audio-footer{
  position: absolute;
  bottom: 0%;

}

.audio-layout{
  
  width: auto;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  
  gap: 1rem;


  .audio-body{
    padding: 1rem;
    width: 45rem;
    height: 8rem;
    border-radius: 1rem;
    background-color: #ce7171;
    overflow: hidden;
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 1rem;
    .audio-img{
      background-color: #2b7bd57c;
      overflow: hidden;
      border-radius: 1rem;
      width: 8rem;
      height: 8rem;
      img{
        width: 8rem;
        height: 8rem;
        object-fit: cover;
      }
    }
    .audio-context{
      
      width: 100%;
      display: flex;
      flex-direction: column;
      
      
      .audio-title{
        padding-left: 1rem ;
        padding-right: 1rem;
        background-color: #b3a5a5;
        height: 4rem;
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: space-between;
      }
      .audio-controllers{
        display: flex;
        justify-content: space-between;
        
        height: 2rem;
        .audio-controller-pre{          
          width: auto;
          height: 100%;
          display: flex;

          
          gap: 1rem;
          
          .audio-speed{
            
            color: rgba(99, 66, 208, 0.53);
            &:hover{
              
              color: rgba(221, 41, 41, 0.57);
            }
            
          }
          .audio-volume{
            
            color: rgba(99, 66, 208, 0.53);
            &:hover{
              
              color: rgba(221, 41, 41, 0.57);
            }
          }
          .audio-playOrder{
            
            color: rgba(99, 66, 208, 0.53);
            &:hover{

              color: rgba(221, 41, 41, 0.57);
            }
          }
        }
        .audio-controller-middle{
          display: flex;
          gap: 1rem;
          
          .audio-pre{
            
            color: rgba(99, 66, 208, 0.53);
            &:hover{
              
              color: rgba(221, 41, 41, 0.596);
            }
          }
          .audio-aft{
            
            color: rgba(99, 66, 208, 0.53);
            &:hover{
              
              color: rgba(221, 41, 41, 0.57);
            }

          }
          .audio-play{
            
            color: rgba(99, 66, 208, 0.53);
            &:hover{
              
              color: rgba(221, 41, 41, 0.57);
            }
          }
        }
        .audio-musicList{
          
          color: rgba(99, 66, 208, 0.53);
          &:hover{
            
            color: rgba(221, 41, 41, 0.57);
          }
        }
      }
      .audio-bar{
        
        height: 2rem;
        max-width: 37rem;
        display: flex;
        
        align-items: center;

        .audio-bar-time-start{
          width: 4rem;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          
        }
        .audio-bar-progress{
          
          width: 100%;
          height: 6px;
          background-color: #fff;
          overflow: hidden;
          .bar-gray{
            height: 100%;
            width: 0%;
            background-color: #a062d096;
          }
          
        }
        .audio-bar-time-end{
          width: 4rem;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          
          
        }
      }

    }
  }

  .audio-show-musicList{
    
   
    min-height: 4rem;
    max-height: 40rem;
    overflow: scroll;
    background-color: #858080;
    

    .audio-musicList-item{
      padding-left: 1rem;
      width: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      

      &:hover{
        color: purple;
      }
      .item-current{
        width: 2px;
        height: 2rem;
        background-color: #7404ec;
      }

    }
  }
}
</style>
