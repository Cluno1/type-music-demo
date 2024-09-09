<script setup lang="ts">
import { RouterLink } from 'vue-router';



</script>

<template>
    <div class="user-message-unlogin"> 
        还没有登录，请先<RouterLink to="/login">登录</RouterLink>
        没有账号？<RouterLink to="/sign">注册</RouterLink>
    </div>
    <div class="user-message-layout">
        <div>头像</div>
        <div>昵称</div>
        <div>签名</div>
        
    </div>

</template>

<style scoped>

</style>
