<template>

  <div @click="handleFullscreen">
    <svg-icon :icon="icon?'exit-fullscreen':'fullscreen'" id="fullscreen"></svg-icon>
  </div>

</template>

<script setup>
import {ref, reactive, onMounted, onBeforeUnmount} from 'vue'
import screenfull from 'screenfull';
const icon = ref(screenfull.isFullscreen)
const handleFullscreen = () => {
    if (screenfull.isEnabled) {
        screenfull.toggle()
    }
}
const changeIcon = () => {
    icon.value = screenfull.isFullscreen
}
onMounted(()=> {
    screenfull.on('change', changeIcon)
})
onBeforeUnmount(()=>{
    screenfull.off('change')
})

</script>

<style scoped>

</style>