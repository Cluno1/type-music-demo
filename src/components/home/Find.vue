<script setup lang="ts">
import { onMounted } from 'vue';


onMounted(()=>{
// 假设有一个按钮元素
var button = document.getElementById('bu');

// 第一个 onclick 事件处理函数
button.onclick = function() {
    console.log('第一个点击事件');
};

// 第二个 onclick 事件处理函数，这将覆盖第一个
button.onclick = function() {
    console.log('第二个点击事件')
}
})


</script>

<template>
 <div> find main </div>
 <button id="bu"> dianji</button>
</template>

<style scoped>

</style>
