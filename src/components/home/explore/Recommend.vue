<script setup lang="ts">
import { onMounted } from 'vue';
import{useBoxStore} from '../../../../stores/boxStore'

    let boxImgs=null;
    let  boxContainer=null;
    let boxPointers=null;
    let boxRight=null;
    let boxLeft=null
    let boxStore=useBoxStore()
    let box=null;

    onMounted(()=>{
        boxImgs=document.querySelectorAll('.box-imgs')
        boxContainer=document.querySelector('.box-container')
        boxPointers=document.querySelectorAll('.box-pointer')
        boxLeft=document.querySelector('.box-left')
        boxRight=document.querySelector('.box-right')
        box=boxStore.initBox(2000,6000,boxImgs,boxContainer,boxPointers,boxLeft,boxRight);
        box.addUrl(['/src/assets/temp/moonNight.png','/src/assets/temp/spring.jpg','/src/assets/temp/xiao.png'])
        box.boxStart(box)
    })


   
</script>

<template>
    <div class="recommend-layout"> 
        <div class="recommend-layout-song-show-box"> 
            <div class="box-button"> 
                <div class="box-left"> 
                    <el-icon><ArrowLeft /></el-icon>
                </div>
                <div class="box-right"> 
                    <el-icon><ArrowRight /></el-icon>
                </div>                
            </div>
            
            <div class="box-container"> 
                <div class="box-imgs">111</div>
                <div class="box-imgs">22</div>
                <div class="box-imgs">33</div>
                <div class="box-imgs">44</div>
                <div class="box-imgs">55</div>
            </div>

            <div  class="box-pointers">
                <span class="box-pointer"></span>
                <span class="box-pointer"></span>
                <span class="box-pointer"></span>
                <span class="box-pointer"></span>
                <span class="box-pointer"></span>
            </div>
            
            

            
            
        </div>
        <div class="recommend-layout-song-middle"> 

        </div>
        
        
    </div>
</template>

<style scoped  lang="scss">
    
</style>
