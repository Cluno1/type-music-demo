<script setup lang="ts">
// defineProps<{ msg: string }>()  暴露attribute



import Aside from './components/Aside.vue';
import Head from './components/Head.vue';
import Main from './components/Main.vue';


</script>

<template>
<div class="app-layout">
    <el-container>
      <el-header>
        <Head/>
      </el-header>
      <el-container>
        <el-aside width="10rem">
          <Aside/>
        </el-aside>
        <el-main ><Main/></el-main>
      </el-container>
      <el-footer>Footerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</el-footer>
    </el-container>
  </div>


</template>

<style scoped>
  
</style>
