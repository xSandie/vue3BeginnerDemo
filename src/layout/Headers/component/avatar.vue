<template>
<el-dropdown>
    <span class="el-dropdown-link">
        <el-avatar shape="square" :size="40" :src="squareUrl" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>


</template>

<script setup>
import {ref, reactive} from 'vue'
import {useUserStore} from '@/stores/userStore';
const squareUrl = ref('https://img0.baidu.com/it/u=1250551608,2180019998&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500')
const userStore = useUserStore()
const logout = () => {
    userStore.logout()
}
</script>

<style lang="scss" scoped>

</style>