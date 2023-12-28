<template>
  <button
    class=" justify-center my-2 0 flex items-center  w-full btn-button-default"
  >
    <div class="flex items-center">
      <div class="p-2 w-8 h-8 flex justify-center items-center">
        <i class="fa-solid" :class="icon"></i>
      </div>
      <div class="uppercase text-xs font-bold">
        <span>{{ name }}</span>
      </div>
    </div>
  </button>
</template>

<script setup>
import { reactive, defineProps } from "vue";

const props = defineProps(["name", "icon", "tabela", "motre"]);
</script>

<style scoped></style>
