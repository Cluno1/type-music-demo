<script setup lang="ts">
import { onMounted } from 'vue';
import{useBoxStore} from '../../../../stores/boxStore'
import{useGridBoxStore} from '../../../../stores/gridBoxStore'
    //推荐-歌曲-盒子
    let boxItems=null;
    let boxContainer=null;
    let boxPointers=null;
    let boxRight=null;
    let boxLeft=null


    let boxStore=useBoxStore()
    let box=null;
    
    let gridBoxStore=useGridBoxStore()
    let gridBox=null
    
    

    onMounted(()=>{
        boxItems=document.querySelectorAll('.box-item')
        boxContainer=document.querySelector('.box-container')
        boxPointers=document.querySelectorAll('.box-pointer')
        boxLeft=document.querySelector('.box-left')
        boxRight=document.querySelector('.box-right')
        box=boxStore.initBox(3000,6000,boxItems,boxContainer,boxPointers,boxLeft,boxRight);
        box.addUrl(['/src/assets/temp/moonNight.png','/src/assets/temp/spring.jpg','/src/assets/temp/xiao.png'])
        box.boxStart(box)

        gridBox=gridBoxStore.initBox(
            document.querySelectorAll('.song-name'),
            document.querySelectorAll('.song-singer'),
            document.querySelectorAll('.song-signature'),
            document.querySelectorAll('.song-submit-time'),
            document.querySelectorAll('.recommend-layout-song-grid-item-img')
        );

        let {songNames,
            songSingers,
            songSignatures,
            songSubmitTimes,
            songImgs} =gridBoxStore.test(20)
        gridBox.gridBoxAddMessage(songNames,songSingers,songSignatures,songSubmitTimes,songImgs)



    })
</script>

<template>
    <div class="recommend-layout "> 
        <div class="recommend-layout-song-show-box show-box"> 
            <div class="box-button"> 
                <div class="box-left"> 
                    <el-icon><ArrowLeft /></el-icon>
                </div>
                <div class="box-right"> 
                    <el-icon><ArrowRight /></el-icon>
                </div>                
            </div>
            
            <div class="box-container"> 
                <div class="box-item"></div>
                <div class="box-item"></div>
                <div class="box-item"></div>
                <div class="box-item"></div>
                <div class="box-item"></div>
            </div>

            <div  class="box-pointers">
                <span class="box-pointer"></span>
                <span class="box-pointer"></span>
                <span class="box-pointer"></span>
                <span class="box-pointer"></span>
                <span class="box-pointer"></span>
            </div>
            
        </div>
        
        <div class="recommend-layout-song-middle "> 

            <span>歌曲<el-icon><DArrowRight /></el-icon></span>
            <el-divider ></el-divider>
            <div class="recommend-layout-song-grid grid-layout"> 
                <div class="recommend-layout-song-grid-item grid-layout-item">
                    <img class="recommend-layout-song-grid-item-img">
                    <div class="recommend-layout-song-grid-item-songMessage"> 
                            <div class="song-name">我是如此相信</div> 
                            <div class="song-singer"> --陈奕迅 </div>
                            <div class="song-signature"> 人生一世，静静听歌</div>
                            <div class="song-submit-time"> 2024/9/12</div>
                            
                    </div>
                </div>
                <div class="recommend-layout-song-grid-item grid-layout-item">
                    <img class="recommend-layout-song-grid-item-img">
                    <div class="recommend-layout-song-grid-item-songMessage"> 
                            <div class="song-name"></div> 
                            <div class="song-singer"> </div>
                            <div class="song-signature"> </div>
                            <div class="song-submit-time"> </div>
                            
                    </div>
                </div>
                <div class="recommend-layout-song-grid-item grid-layout-item">
                    <img class="recommend-layout-song-grid-item-img">
                    <div class="recommend-layout-song-grid-item-songMessage"> 
                            <div class="song-name"></div> 
                            <div class="song-singer"> </div>
                            <div class="song-signature"> </div>
                            <div class="song-submit-time"> </div>
                            
                    </div>
                    
                </div>
                <div class="recommend-layout-song-grid-item grid-layout-item">
                    <img class="recommend-layout-song-grid-item-img">
                    <div class="recommend-layout-song-grid-item-songMessage"> 
                            <div class="song-name"></div> 
                            <div class="song-singer"> </div>
                            <div class="song-signature"> </div>
                            <div class="song-submit-time"> </div>
                            
                    </div>
                </div>
                <div class="recommend-layout-song-grid-item grid-layout-item">
                    <img class="recommend-layout-song-grid-item-img">
                    <div class="recommend-layout-song-grid-item-songMessage"> 
                            <div class="song-name"></div> 
                            <div class="song-singer"> </div>
                            <div class="song-signature"> </div>
                            <div class="song-submit-time"> </div>
                            
                    </div>
                </div>
                <div class="recommend-layout-song-grid-item grid-layout-item">
                    <img class="recommend-layout-song-grid-item-img">
                    <div class="recommend-layout-song-grid-item-songMessage"> 
                            <div class="song-name"></div> 
                            <div class="song-singer"> </div>
                            <div class="song-signature"> </div>
                            <div class="song-submit-time"> </div>
                            
                    </div>
                </div>
                <div class="recommend-layout-song-grid-item grid-layout-item">
                    <img class="recommend-layout-song-grid-item-img">
                    <div class="recommend-layout-song-grid-item-songMessage"> 
                            <div class="song-name"></div> 
                            <div class="song-singer"> </div>
                            <div class="song-signature"> </div>
                            <div class="song-submit-time"> </div>
                            
                    </div>
                </div>
                <div class="recommend-layout-song-grid-item grid-layout-item">
                    <img class="recommend-layout-song-grid-item-img">
                    <div class="recommend-layout-song-grid-item-songMessage"> 
                            <div class="song-name"></div> 
                            <div class="song-singer"> </div>
                            <div class="song-signature"> </div>
                            <div class="song-submit-time"> </div>
                            
                    </div>
                </div>
                <div class="recommend-layout-song-grid-item grid-layout-item">
                    <img class="recommend-layout-song-grid-item-img">
                    <div class="recommend-layout-song-grid-item-songMessage"> 
                            <div class="song-name"></div> 
                            <div class="song-singer"> </div>
                            <div class="song-signature"> </div>
                            <div class="song-submit-time"> </div>
                            
                    </div>
                </div>
                <div class="recommend-layout-song-grid-item grid-layout-item">
                    <img class="recommend-layout-song-grid-item-img">
                    <div class="recommend-layout-song-grid-item-songMessage"> 
                            <div class="song-name"></div> 
                            <div class="song-singer"> </div>
                            <div class="song-signature"> </div>
                            <div class="song-submit-time"> </div>
                            
                    </div>
                </div>
                <div class="recommend-layout-song-grid-item grid-layout-item">
                    <img class="recommend-layout-song-grid-item-img">
                    <div class="recommend-layout-song-grid-item-songMessage"> 
                            <div class="song-name"></div> 
                            <div class="song-singer"> </div>
                            <div class="song-signature"> </div>
                            <div class="song-submit-time"> </div>
                            
                    </div>
                </div>
                <div class="recommend-layout-song-grid-item grid-layout-item">
                    <img class="recommend-layout-song-grid-item-img">
                    <div class="recommend-layout-song-grid-item-songMessage"> 
                            <div class="song-name"></div> 
                            <div class="song-singer"> </div>
                            <div class="song-signature"> </div>
                            <div class="song-submit-time"> </div>
                            
                    </div>
                </div>
                <div class="recommend-layout-song-grid-item grid-layout-item">
                    <img class="recommend-layout-song-grid-item-img">
                    <div class="recommend-layout-song-grid-item-songMessage"> 
                            <div class="song-name"></div> 
                            <div class="song-singer"> </div>
                            <div class="song-signature"> </div>
                            <div class="song-submit-time"> </div>
                            
                    </div>
                </div>
                <div class="recommend-layout-song-grid-item grid-layout-item">
                    <img class="recommend-layout-song-grid-item-img">
                    <div class="recommend-layout-song-grid-item-songMessage"> 
                            <div class="song-name"></div> 
                            <div class="song-singer"> </div>
                            <div class="song-signature"> </div>
                            <div class="song-submit-time"> </div>
                            
                    </div>
                </div>
                <div class="recommend-layout-song-grid-item grid-layout-item">
                    <img class="recommend-layout-song-grid-item-img">
                    <div class="recommend-layout-song-grid-item-songMessage"> 
                            <div class="song-name"></div> 
                            <div class="song-singer"> </div>
                            <div class="song-signature"> </div>
                            <div class="song-submit-time"> </div>
                            
                    </div>
                </div>
                <div class="recommend-layout-song-grid-item grid-layout-item">
                    <img class="recommend-layout-song-grid-item-img">
                    <div class="recommend-layout-song-grid-item-songMessage"> 
                            <div class="song-name"></div> 
                            <div class="song-singer"> </div>
                            <div class="song-signature"> </div>
                            <div class="song-submit-time"> </div>
                            
                    </div>
                </div>
                <div class="recommend-layout-song-grid-item grid-layout-item">
                    <img class="recommend-layout-song-grid-item-img">
                    <div class="recommend-layout-song-grid-item-songMessage"> 
                            <div class="song-name"></div> 
                            <div class="song-singer"> </div>
                            <div class="song-signature"> </div>
                            <div class="song-submit-time"> </div>
                            
                    </div>
                </div>
                <div class="recommend-layout-song-grid-item grid-layout-item">
                    <img class="recommend-layout-song-grid-item-img">
                    <div class="recommend-layout-song-grid-item-songMessage"> 
                            <div class="song-name"></div> 
                            <div class="song-singer"> </div>
                            <div class="song-signature"> </div>
                            <div class="song-submit-time"> </div>
                            
                    </div>
                </div>
                <div class="recommend-layout-song-grid-item grid-layout-item">
                    <img class="recommend-layout-song-grid-item-img">
                    <div class="recommend-layout-song-grid-item-songMessage"> 
                            <div class="song-name"></div> 
                            <div class="song-singer"> </div>
                            <div class="song-signature"> </div>
                            <div class="song-submit-time"> </div>
                            
                    </div>
                </div>
                <div class="recommend-layout-song-grid-item grid-layout-item">
                    <img class="recommend-layout-song-grid-item-img">
                    <div class="recommend-layout-song-grid-item-songMessage"> 
                            <div class="song-name"></div> 
                            <div class="song-singer"> </div>
                            <div class="song-signature"> </div>
                            <div class="song-submit-time"> </div>
                            
                    </div>
                </div>
            </div>

        </div>
        
        
    </div>
</template>

<style scoped  lang="scss">
    
</style>
