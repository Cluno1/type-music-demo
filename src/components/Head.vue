<script setup lang="ts">

import { ref, watch } from 'vue';
import { useScreenStore } from '../../stores/screenStore';
import { useSearchStore } from '../../stores/searchStore';
import {toggleDarkMode} from '../ts/Dark'

import { useDarkStore } from './../../stores/dark';
import router from '../router';
import { useI18n } from 'vue-i18n';
import { getSearchApi } from '../api/project';

const {t,locale} =useI18n()
const searchStore = useSearchStore()
const store=useDarkStore()
const screenStore=useScreenStore()

const inputPlaceHolder=ref(t('message.head.searchParam'))
const darkButtonHolder=ref('default')

const callCenter=()=>router.push('/call-center')
const mail=()=>router.push('/mail')

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

const lang=ref('english')
function handleI18n(command){
    lang.value=command
    if(lang.value=='中文'){
        locale.value='zh-CN'
    }else if(lang.value=='english'){
        locale.value='EN'
    }
    inputPlaceHolder.value=t('message.head.searchParam')
    

}


const input=ref('')

function handleSearch(){
    getSearchApi(input.value).then(res => {
            if(res.data.code==200){
                alert('success')
                searchStore.data=res.data.data;
                router.push('/search')
            }
    })
}

</script>

<template>
 <div class="head-layout"> 
    <div class="head-layout-left"> 
        <el-button @click="toggleDarkMode(store)" v-if="store.dark" :size=darkButtonHolder><el-icon><Sunrise /> </el-icon>{{ t('message.head.dark') }}</el-button>
        <el-button @click="toggleDarkMode(store)" v-if="!store.dark" :size=darkButtonHolder><el-icon><MoonNight /></el-icon>{{ t('message.head.light') }}</el-button>
        <el-dropdown trigger="click" @command="handleI18n">
            <span class="el-dropdown-link">
                {{ lang }}
                 <el-icon class="el-icon--right">
                   <arrow-down />
                 </el-icon>
            </span>
            <template #dropdown>
                 <el-dropdown-menu>
                   <el-dropdown-item command="english">english</el-dropdown-item>
                   <el-dropdown-item command="中文">中文</el-dropdown-item>
                 </el-dropdown-menu>
            </template>
        </el-dropdown>
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
        <el-button :size=screenStore.screen.size @click="handleSearch"><h4>{{ t('message.head.search') }}</h4></el-button>
    </div>
    
    <div class="head-layout-right"> 
        
        <div class="head-layout-right-layout" @click="mail"><el-icon><Message /></el-icon><div>{{ t('message.head.mail') }}</div></div>
        <div class="head-layout-right-layout"><el-icon><BellFilled /></el-icon><div>{{ t('message.head.subscribe') }}</div></div>
        <div class="head-layout-right-layout" @click=callCenter ><el-icon><Service /></el-icon><div>{{ t('message.head.callCenter') }}</div></div>
        <div class="head-layout-right-layout"><el-icon><UserFilled /></el-icon><div>{{ t('message.head.login') }}</div></div>
    </div>
 
    
 </div>
</template>

<style scoped lang="scss">


</style>