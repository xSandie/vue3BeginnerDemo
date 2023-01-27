<template>

<el-breadcrumb separator=">">
    <el-breadcrumb-item :to="{path:item.path}" v-for="(item, index) in breadcrumbList" :key="index">{{$t(`menus.${item.name}`)}}</el-breadcrumb-item>
  </el-breadcrumb>

</template>

<script setup>
import {ref, reactive, watch} from 'vue'
import {useRoute} from 'vue-router';
const route = useRoute()


const breadcrumbList = ref([])
const initBreadcrumb = () => {
    breadcrumbList.value = route.matched
    console.log(route.matched);
}
watch(route,()=>{
    initBreadcrumb()
},{deep:true,immediate:true})

</script>

<style lang="scss" scoped>

</style>