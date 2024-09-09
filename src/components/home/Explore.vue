<script setup lang="ts">
import { RouterView,RouterLink } from 'vue-router'
import router from '../../router';
import { onMounted } from 'vue';
import { useScreenStore } from '../../../stores/screenStore';

const screenStore=useScreenStore()

onMounted(()=>router.push('recommend'))

</script>

<template>
    <div class="explore-layout">
        <div class="explore-layout-head">
            <RouterLink to="/recommend"><el-button :size=screenStore.screen.size>推荐</el-button></RouterLink>
            <RouterLink to="/rank"><el-button :size=screenStore.screen.size>排行</el-button></RouterLink>
            <RouterLink to="/songList"> <el-button :size=screenStore.screen.size>歌单</el-button></RouterLink>
            <RouterLink to="/radio"><el-button :size=screenStore.screen.size>电台</el-button></RouterLink>
            <RouterLink to="/singer"><el-button :size=screenStore.screen.size>歌手</el-button></RouterLink>

            
        </div>
        <div class="explore-layout-main">
            
            <RouterView/>
        </div>
    </div>
</template>

<style scoped lang="scss">
    

</style>
