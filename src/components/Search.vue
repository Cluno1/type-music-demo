<template>
<div>search page</div>
<el-skeleton animated v-show="a"/>
  <br />
  <el-skeleton style="--el-skeleton-circle-size: 100px">
    <template #template>
      <el-skeleton-item variant="circle" />
    </template>
</el-skeleton>
<div v-show="!a">{{ searchStore.data }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSearchStore } from '../../stores/searchStore';

let searchStore=useSearchStore()

let a=ref(false)
setInterval(() => {
    a.value=!a.value
}, 2000);
</script>

<style  scoped lang="scss">

</style>