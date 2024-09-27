// <script setup lang="ts">
// import { onMounted, ref } from 'vue';




// interface Song {
//                 songId:number,
//                 songName:string,
//                 songSinger:string,
//                 songSignature:string,
//                 songSubmitTime:string,
//                 songImg:string,//url
//                 songImgLoad:boolean
//             }


// const bgStyle=ref<null|Song>(null)
// const boxSongs=ref([] as Song[])

// function initBoxMessage(){
    
//     for(let i=0;i<2;i++){

//         let song={

//             songId:i,
//             songName:'达尔文',
//             songSinger:'蔡健雅',
//             songSignature:'好听，温柔',
//             songSubmitTime:'2024-9-26',
//             songImg:`https://picsum.photos/580/460?random=${i}`,//url
//             songImgLoad:false
//         };

//         boxSongs.value.push(song)
//         song={

// songId:i+1,
// songName:'人来人往',
// songSinger:'陈奕迅',
// songSignature:'好听，爱听，多来点',
// songSubmitTime:'2024-9-27',
// songImg:`https://picsum.photos/580/460?random=${i+1}`,//url
// songImgLoad:false
// };
// boxSongs.value.push(song)
        
//     }
// }

// function backgroundStyle(song:Song|null){
//    if(!song){
//     return;
//    }
//     return {
//         backgroundImage:`url(${song.songImg})`,
//         backgroundSize:'cover',
//     }
// }

// initBoxMessage()

// // const timer
// function decorateBox(){

//   function check(){
//     if(index>=songs.value.length){
//         index=0
//     }else if(index<0){
//         index=songs.value.length-1;
//     }
//   }
//   let index=0;
//   let timerId=null;
//   function boxChange(turn:null|number|'left'|'right'){
    
//     clearTimeout(timerId)
//     let turnNull=0;
//     for(let i=0;i<songs.value.length;i++){
//         if(songs.value[i].songImgLoad){
//             turnNull=i+1;
//             songs.value[i].songImgLoad=false
//         }

//     }
//   if(turn===null){
    
//    index=turnNull;

//     check();
//     songs.value[index].songImgLoad=true
//     timerId=setTimeout(()=>boxChange(null),3000)
//   }else if(turn==='left'){
    
//     index--;
//     check();
//     songs.value[index].songImgLoad=true
//     timerId=setTimeout(()=>boxChange(null),5000)
//   }else if(turn==='right'){
//     index++;
//     check();
//     songs.value[index].songImgLoad=true
//     timerId=setTimeout(()=>boxChange(null),5000)
//   }else {
//     index=turn
//     check();
//     songs.value[index].songImgLoad=true
//     timerId=setTimeout(()=>boxChange(null),5000)
//   }
//   bgStyle.value=songs.value[index]
//   }
// return boxChange
// }

// const boxTurn=decorateBox()
// boxTurn(null)


// </script>

// <template>
//   <div class="color-blur" :style="backgroundStyle(bgStyle)"> 
//   <div class="box-layout" >
    

   
//     <div class="box-box"> 
//         <div class="box-button"> 
//             <div class="box-left" @click="boxTurn('left')"> 
//                 <el-icon><ArrowLeft /></el-icon>
//             </div>
//             <div class="box-right" @click="boxTurn('right')"> 
//                 <el-icon><ArrowRight /></el-icon>
//             </div>                
//         </div>
//         <div class="box-container"> 
//             <div 
//                 class="box-img"
//                 v-for="song in songs"
//                 :key="song.songId"
//                 :style="backgroundStyle(song)"
//                 v-show="song.songImgLoad"
//             />
//         </div>
//         <div  class="box-pointers">
//             <span 
//             class="box-pointer"
//             v-for="(song,index) in songs"
//             :key="song.songId"
//             @click="boxTurn(index)"
//             />
            
//         </div>

//    </div>
   
//    <div class="box-message" >
//     <div 
//    class="box-message-item" 
//    v-for="song in songs"
//    :key="song.songId"
//    v-show="song.songImgLoad"
//    > 
//    {{ song.songName }}<br/>
//    {{ song.songSinger }}<br/>
//    {{ song.songSignature }}<br/>
//    {{ song.songSubmitTime }}<br/>
//    </div>
//    </div>
//   </div>
//   </div>
   
// </template>

// <style scoped lang="scss">



 
// </style>
