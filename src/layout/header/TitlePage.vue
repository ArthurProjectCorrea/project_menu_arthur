<template>
  <div
    class="flex items-center justify-between w-full h-16 px-4 py-1 bg-gray-100 border-b border-gray-300"
  >
    <div>
      <h1 class="font-bold text-gray-600 uppercase">{{ name }}</h1>
    </div>
    <div class="flex gap-2">
      <slot class=""></slot>
      <button class="btn-background-lime" v-if="isExport">
        <i class="fa-solid fa-download"></i>
      </button>
      <button class="btn-background-blue" v-if="isFilter">
        <i class="fa-solid fa-filter"></i>
      </button>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps(["name", "isFilter", "isExport", "isCreate"]);

</script>

<style scoped></style>
