<script setup>
import { ElConfigProvider } from 'element-plus'
import {ref} from 'vue'


const zIndex = ref(3000)
const size = ref('default')
</script>

<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <div style="width:100%;height:100%;">
      <router-view></router-view>
    </div>
  </el-config-provider>

</template>

<style scoped>
</style>
