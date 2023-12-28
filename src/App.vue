<template>
  <main class="flex items-start justify-between w-full h-full">
    <NavBar class=""/>
    <div class="w-full h-full">

      <router-view></router-view>
    </div>
  </main>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
</script>

<style scoped></style>
