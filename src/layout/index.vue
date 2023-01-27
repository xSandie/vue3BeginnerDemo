<template>
        <el-container class="app-container">
        <el-aside :width="asideWidth" class="sidebar-container">
            <Menu></Menu>
        </el-aside>
        <el-container class="container" :class="userStore.sideBarHide ? 'hidderContainer' :''">
            <el-header>
                <Headers></Headers>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
        </el-container>
</template>

<script setup>
import {ref, reactive, computed, onMounted} from 'vue'
import Menu from '@/layout/Menu/index.vue';
import Headers from '@/layout/Headers/index.vue';
import {useUserStore} from '@/stores/userStore';
import variables from '@/styles/variables.module.scss';

const userStore = useUserStore()
const asideWidth = computed(()=>{
    return userStore.sideBarHide ? variables.hideSideBarWidth : variables.sideBarWidth
})
</script>

<style lang="scss" scoped>
@import "@/styles/variables.module.scss"; 
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.sidebar-container{
//   background-color: $menuBg;
    height: 100%;
    :deep(.el-menu){
        height: 100%;
    }
}
.container {
  width: calc(100% - $sideBarWidth);
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  &.hidderContainer {
    width: calc(100% - $hideSideBarWidth);
  }
}

:deep(.el-header) {
  padding: 0;
}
</style>