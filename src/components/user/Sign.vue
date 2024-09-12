<script setup lang="ts">
import { RouterLink } from 'vue-router';



</script>

<template>
    <div class="sign-layout"> 
        <div class="sign-layout-left-card"> 
            Sign up m-Music !<br/>
            <div class="sign-layout-left-card-test">已有账号?<RouterLink to="/login">登录</RouterLink></div>
        </div>
        <div class="sign-layout-right-card"> 
            <span> 注册</span>
            <el-input style="width:12rem" placeholder="账号"> </el-input>
            <el-input style="width:12rem" placeholder="密码"> </el-input>
            <el-input style="width:12rem" placeholder="确认密码"> </el-input>
            <el-input style="width:12rem" placeholder="邮箱号"> </el-input>
            <div class="sign-layout-right-card-code"> 
                <el-input style="width:6rem"> 验证码</el-input>
                <el-button > 获取验证码</el-button>
            </div>
            
        </div>
        
    </div>
 
</template>

<style scoped lang="scss">

.sign-layout{
    box-shadow: 
            5px 5px 10px  2px rgba(48, 48, 88, 0.218),
            inset -2px -2px 10px  1px rgba(51, 56, 54, 0.256);
    border-radius: 1rem;
    width:80%;
    height: 40rem;
    background-color: #d8626220;
    display: flex;
    justify-content: center;
    align-items: center;
    .sign-layout-left-card{
        width: 30%;
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 0.2rem;
        font-size: 2rem;
        background-color: #ffffffaa;

        transition: all 1.5s;
        position: relative;
        
        filter: blur(1px);
        
        padding: 1rem;
        
        
        background-color: #f5f6f680;
        .sign-layout-left-card-test{
            font-size: 0.8rem;
        }
    }
    .sign-layout-left-card:hover{
        box-shadow: 
            -2px -1px 3px 0px  rgb(250, 253, 255),
            5px 5px 10px  2px rgba(48, 48, 88, 0.36),
            inset  3px 3px 10px 2px  rgb(242, 246, 248),
            inset -2px -2px 10px  1px rgba(51, 56, 54, 0.425);
        filter: blur(0px);
        background-color: #f5f6f6b8;
    }
    .sign-layout-right-card{
        border-radius: 0.5rem;
        width: 30%;
        height: 60%;
        display: flex;
        gap: 0.4rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #ffffff96;
    }
}
    

</style>
