<script setup lang="ts">
import { useDarkStore } from '../../../stores/dark';




const darkStore=useDarkStore()




</script>

<template>
    <div class="background-color" id="color-block" v-show="!darkStore.dark"></div>
    <div class="background-color" id="color-block" v-show="!darkStore.dark"></div>
    <div class="background-color" id="color-block" v-show="!darkStore.dark"></div>
</template>

<style scoped lang="scss">
    @keyframes rotateAround{
      0%{
        transform: rotate(0deg) translateX(10rem) rotate(0deg);
      }
      100%{
        transform: rotate(360deg) translateX(10rem) rotate(-360deg);
      }
    }
    @keyframes rotateAroundCh{
      0%{
        transform: rotate(0deg) translateX(5rem) rotate(0deg);
      }
      100%{
        transform: rotate(360deg) translateX(5rem) rotate(-360deg);
      }
    }

    .background-color{
      position: fixed;
      border-radius: 50%;
      filter: blur(190px);
    }
    .background-color:nth-child(1){
      left: 10rem;
      top: 10rem;
      width: 40em;
      height: 40em;
      background-color:rgb(235, 78, 183);
      animation:rotateAround 10s linear infinite;
    }
    .background-color:nth-child(2){
      left: 55rem;
      top: 35rem;
      width: 55em;
      height: 55em;
      background-color:rgb(77, 67, 223);
      animation:rotateAroundCh 20s linear infinite;
    }
    .background-color:nth-child(3){
      left: 63rem;
      top: 5rem;
      width: 25em;
      height: 25em;
      background-color:rgb(26, 226, 72);
      animation:rotateAround 15s linear infinite;
    }

</style>
