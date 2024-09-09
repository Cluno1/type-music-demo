<script setup lang="ts">

</script>

<template>
    <div class="sign-layout"> 
        <div class="sign-layout-card"> 
            <span> 注册</span>
        <el-input> 账号</el-input>
        <el-input> 密码</el-input>
        <el-input> 确认密码</el-input>
        <el-input> 验证码</el-input>
        <el-button> 获取验证码</el-button>
        </div>
        
    </div>
 
</template>

<style scoped lang="scss">

.sign-layout{
    display: flex;
    justify-content: center;
    .sign-layout-card{
        width: 20rem;
    }
}
    

</style>
