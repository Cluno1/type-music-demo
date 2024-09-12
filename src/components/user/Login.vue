<script setup lang="ts">
import { ref } from 'vue';
import { useScreenStore } from '../../../stores/screenStore';
import { RouterLink } from 'vue-router';

const screenStore=useScreenStore()


const userName=ref(null)
const password=ref(null)
</script>

<template>
    <div class="login-layout">
        <div class="login-layout-left-card"> 
                welcome login in 
                <div>m-Music</div>
                 
                <div class="login-layout-left-card-test"> 
                    没有账号? <RouterLink to="/sign">注册</RouterLink>
                </div>
                
        </div>

        <div class="login-layout-right-card"> 
            <div> 登录</div>

            <div class="login-layout-input"> 

                <input placeholder="账号/邮箱号" :value="userName"/>
            </div>

            <div class="login-layout-input">  

                <input type="password" placeholder="密码" :value="password"/>
            </div>

            <button> 确认</button>
        </div>
        
    </div>
</template>

<style scoped lang="scss">
.login-layout{
    box-shadow:           
            5px 5px 10px  2px rgba(48, 48, 88, 0.36),          
            inset -2px -2px 10px  1px rgba(51, 56, 54, 0.425);
    height: 40rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff1d;
    
    border-radius: 2rem;
    .login-layout-left-card{
       
        transition: all 1.5s;
        position: relative;
        // left: 1rem;
        // bottom: -1rem;
        filter: blur(1px);
        width: 20%;
        height: 20%;
        border-radius: 1rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        background-color: #f5f6f680;
        .login-layout-left-card-test{
            font-size: 0.8rem;
        }
    }
    .login-layout-left-card:hover{
        box-shadow: 
            -2px -1px 3px 0px  rgb(250, 253, 255),
            5px 5px 10px  2px rgba(48, 48, 88, 0.36),
            inset  3px 3px 10px 2px  rgb(242, 246, 248),
            inset -2px -2px 10px  1px rgba(51, 56, 54, 0.425);
        filter: blur(0px);
        background-color: #f5f6f6b8;
    }
    .login-layout-right-card{
        transition: all 1.5s;
        overflow: hidden;
        filter: blur(1px);
        width: 30%;
        height: 30%;
        border-radius: 1rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        gap: 1rem;
        background-color: #e5edfa4d;

        .login-layout-input{
            
            
            width: 60%;
            height: 2rem;
            border-radius: 0.5rem;
            padding: 0.3rem;
            display: flex;
            align-items: center;

            input{
                width: 100%;
                height: 2rem;
                border: none;
                outline: none;
                background-color: transparent;
                border-radius: 0.5rem;
            
            }
        
        }
        
    
        .login-layout-input:hover{

            background-color:rgba(240, 248, 255, 0.368)
        }

        button{
            width: 4rem;
            height: 3rem;
            border-radius: 1rem;
            border: none;
            outline: none;
            border-bottom: 1cap;
            background-color: rgba(240, 238, 232, 0.378)
        }
        button:hover{
            background-color: rgba(246, 245, 242, 0.696)
        }
    }
    .login-layout-right-card:hover{
        box-shadow: 
            -2px -1px 3px 0px  rgb(250, 253, 255),
            5px 5px 10px  2px rgba(48, 48, 88, 0.36),
            inset  3px 3px 10px 2px  rgb(242, 246, 248),
            inset -2px -2px 10px  1px rgba(51, 56, 54, 0.425);
        filter: blur(0px);
        background-color: #f5f6f6b8;
    }
    
}
    

</style>
