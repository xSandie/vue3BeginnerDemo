<template>
      <el-menu
        active-text-color="green"
        :background-color="variables.menuBg"
        class="el-menu-vertical-demo"
        :default-active="defaultActive"
        text-color="#fff"
        :collapse="userStore.sideBarHide"
        @open="handleOpen"
        @close="handleClose"
        router
        unique-opened
      >
        <el-sub-menu :index="item.path" v-for="(item,index) in menuList" :key="item.id">
          <template #title>
            <el-icon>
                <component :is="iconList[index]"></component>
            </el-icon>
            <span>{{item.authName}}</span>
          </template>
          <el-menu-item :route="'/'+it.path" @click="savePath(it.path)" v-for="it in item.children" :index="'/'+it.path" :key="it.id">{{it.authName}}</el-menu-item>
        </el-sub-menu>
      </el-menu>

</template>

<script setup>
import {ref, reactive, onMounted} from 'vue'
import {getMenuList} from '@/api/menu.js';
import variables from '@/styles/variables.module.scss';
import {useUserStore} from '@/stores/userStore';
import router from '@/router/index'
const userStore = useUserStore()
// console.log(variables);
const iconList = ["user","setting","Goods","tickets","pie-chart"]
const menuList = ref([])
const defaultActive = ref(sessionStorage.getItem('path')||'/users')

const initMenuList = async()=>{
    let res = await getMenuList()
    menuList.value = res.data
}
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

const savePath = (path) => {
    sessionStorage.setItem('path','/'+path)
}
console.log('refresh',defaultActive.value);
onMounted(() => {
  initMenuList()
  defaultActive.value = sessionStorage.getItem('path') || '/users'
  console.log('onmounted',defaultActive.value);
  router.push(defaultActive.value)
})

</script>

<style scoped>

</style>