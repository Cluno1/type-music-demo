<script setup lang="ts">


import { useScreenStore } from '../../stores/screenStore';
import {isCollapse,selected} from '../ts/Aside'


const screenStore=useScreenStore()


</script>

<template>
  

<el-radio-group v-model="isCollapse" style="margin-bottom: 1rem" :size=screenStore.screen.size>
    <el-radio-button :value="false" v-if="isCollapse" ><el-icon><Expand /></el-icon></el-radio-button>
    <el-radio-button :value="true" v-if="!isCollapse"><el-icon><Fold /></el-icon></el-radio-button>
</el-radio-group>

  <el-menu
    default-active="explore"
    :collapse="isCollapse"
    @select="selected"
    
  >
    <el-sub-menu index="home">
      <template #title>
        <el-icon><Headset /></el-icon>
        <span>主页</span>
      </template>
      <el-menu-item-group>
        <!-- <template #title><span>Group One</span></template> -->
        <el-menu-item index="explore" >探索</el-menu-item>
        <el-menu-item index="find">发现</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-sub-menu index="user">
      <template #title >
          <el-icon><User /></el-icon>
          <span>用户</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="userMessage" >个人信息</el-menu-item>
        <el-menu-item index="dataAnalyze">数据统计</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-sub-menu index="submit">
      <template #title>
        <el-icon><Lollipop /></el-icon>
        <span>发布</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="submit" >上传</el-menu-item>
        <el-menu-item index="create">创作</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="setting">
      <el-icon><Setting /></el-icon>
      <template #title>设置</template>
    </el-menu-item>
  </el-menu>
 
</template>

<style scoped>

</style>