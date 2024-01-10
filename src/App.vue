<template>
  <main class="flex items-start justify-between w-full h-full">
    <SideBar class=""/>
    <div class="w-full h-full">

      <router-view></router-view>
    </div>
  </main>
</template>

<script setup>
import SideBar from './layout/sidebar/SideBar.vue';
</script>

<style scoped></style>
