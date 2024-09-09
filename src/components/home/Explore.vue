<script setup lang="ts">
import { RouterView,RouterLink } from 'vue-router'
</script>

<template>
    <div class="explore-layout">
        <div class="explore-layout-head">
            <RouterLink to="/recommend"><el-button >推荐</el-button></RouterLink>
            <RouterLink to="/rank"><el-button >排行</el-button></RouterLink>
            <RouterLink to="/song-list"> <el-button >歌单</el-button></RouterLink>
            <RouterLink to="/radio"><el-button >电台</el-button></RouterLink>
            <RouterLink to="/singer"><el-button >歌手</el-button></RouterLink>

            
        </div>
        <div class="explore-layout-main">
            explore
            <RouterView/>
        </div>
    </div>
</template>

<style scoped>

</style>
