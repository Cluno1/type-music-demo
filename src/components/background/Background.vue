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
    .background-color{
      position: fixed;
      filter: blur(190px);
    }
    .background-color:nth-child(1){
      left: 10rem;
      top: 10rem;
      width: 40em;
      height: 40em;
      background-color:rgb(235, 78, 183);
    }
    .background-color:nth-child(2){
      left: 55rem;
      top: 35rem;
      width: 50em;
      height: 55em;
      background-color:rgb(77, 67, 223);
    }
    .background-color:nth-child(3){
      left: 63rem;
      top: 5rem;
      width: 25em;
      height: 25em;
      background-color:rgb(26, 226, 72);
    }

</style>
