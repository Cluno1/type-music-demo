<script setup lang="ts">

import {toggleDarkMode} from '../ts/Dark'
import {input} from '../ts/Head'
</script>

<template>
 <div class="head-layout"> 
    <el-button @click="toggleDarkMode">切换黑暗模式</el-button>

    <el-input
    v-model="input"
    style="min-width: 10rem;max-width:20rem;height:40px"
    placeholder="搜索歌曲"
    prefix-icon="search"
    clearable
    />

    <div class="test">用户头像</div>
 

 </div>
</template>

<style scoped>
.head-layout{
    width: 100%;
    height: 100%;
    display: flex;
    flex: 1,1,0px;
    justify-content: space-between;
}
.test{
    overflow: hidden;
    width: 3rem;
    height: 2rem;
    background-color: var(--el-color-primary);
}
</style>