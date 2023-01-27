<template>

  <div class="hamburger-container" id="hamburger" @click="toggleClick">
    <svg-icon :icon="iconClass"></svg-icon>
  </div>

</template>

<script setup>
import {computed} from 'vue'
import {useUserStore} from '@/stores/userStore';
const userStore = useUserStore()
const toggleClick = ()=>{
    userStore.toggleSideBar()
}
const iconClass = computed(()=>{
    return userStore.sideBarHide ? 'hamburger-closed':'hamburger-opened'
})
</script>

<style lang="scss" scoped>
.hamburger-container{
    margin-right: 16px;
    box-sizing: border-box;
    cursor: pointer;
}
</style>