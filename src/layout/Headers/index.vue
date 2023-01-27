<template>

  <div class="navbar">
    <Hamburger></Hamburger>
    <Breadcrumb></Breadcrumb>
    <div class="navbar-right">
      <Guide class="navbar-item"></Guide>
        <Screenfull class="navbar-item"></Screenfull>
        <Lang class="navbar-item"></Lang>
        <Avatar class="navbar-item"></Avatar>     
    </div>
    
  </div>

</template>

<script setup>
import {ref, reactive} from 'vue'
import Hamburger from './component/hamburgers.vue';
import Breadcrumb from './component/breadcrumb.vue';
import Avatar from './component/avatar.vue';
import Lang from './component/lang.vue';
import Screenfull from './component/screenfull.vue';
import Guide from './component/driver/index.vue';


</script>

<style  lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  .navbar-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    :deep(.navbar-item) {
      display: inline-block;
      margin-left: 18px;
      font-size: 22px;
      color: #5a5e66;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
}
</style>
