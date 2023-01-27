<template>

<el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      <svg-icon icon="language"></svg-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh" :disabled="currentLanguage === 'zh'">中文</el-dropdown-item>
        <el-dropdown-item command="en" :disabled="currentLanguage === 'en'">英文</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

</template>

<script setup>
import {ref, reactive, computed} from 'vue'
import {useI18n} from 'vue-i18n';
import {useUserStore} from '@/stores/userStore';

const i18n = useI18n()
const userStore = useUserStore()
const handleCommand = (val) => {
    i18n.locale.value = val
    userStore.setLang(val)
}

const currentLanguage = computed(()=>{
    return i18n.locale.value
})
</script>

<style scoped>

</style>