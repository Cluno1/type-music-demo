<script setup lang="ts">

import { ref, watch } from 'vue';
import { useScreenStore } from '../../stores/screenStore';
import {toggleDarkMode} from '../ts/Dark'
import {input} from '../ts/Head'
import { useDarkStore } from './../../stores/dark';
const store=useDarkStore()
const screenStore=useScreenStore()

const inputPlaceHolder=ref("搜索歌曲/歌手/歌单/电台")
const darkButtonHolder=ref('default')

watch(()=>screenStore.screen.screen,(newVal)=>{
    if(newVal==='desktop'){
        inputPlaceHolder.value="搜索歌曲/歌手/歌单/电台"
        darkButtonHolder.value='default'
    }else if(newVal==='tablet'){
        inputPlaceHolder.value="搜索歌曲/歌手/歌单/电台"
        darkButtonHolder.value='small'
    }else {
        inputPlaceHolder.value=""
        darkButtonHolder.value='small'
    }
})
</script>

<template>
 <div class="head-layout"> 
    <div class="head-layout-left"> 
        <el-button @click="toggleDarkMode(store)" v-if="store.dark" :size=darkButtonHolder><el-icon><Sunrise /></el-icon></el-button>
        <el-button @click="toggleDarkMode(store)" v-if="!store.dark" :size=darkButtonHolder><el-icon><MoonNight /></el-icon></el-button>
        <div class="head-layout-left-web-name"><h1>m-Music</h1></div>
    </div>
    
    <div class="head-layout-middle"> 
        <el-input
            
            v-model="input"
            :placeholder=inputPlaceHolder
            prefix-icon="search"
            clearable
            autosize
            style="min-width: 10rem;"
        />
        <el-button :size=screenStore.screen.size><h4>搜索</h4></el-button>
    </div>
    
    <div class="head-layout-right"> 
        
        <div class="head-layout-right-layout"><el-icon><Message /></el-icon><div>私信</div></div>
        <div class="head-layout-right-layout"><el-icon><BellFilled /></el-icon><div>订阅</div></div>
        <div class="head-layout-right-layout"><el-icon><Service /></el-icon><div>客服</div></div>
        <div class="head-layout-right-layout"><el-icon><UserFilled /></el-icon><div>登录</div></div>
    </div>
 
    
 </div>
</template>

<style scoped lang="scss">


</style>