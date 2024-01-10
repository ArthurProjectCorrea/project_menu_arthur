<template>
  <div class="flex items-center justify-between w-full h-16 px-4 py-1 bg-gray-100 border-b border-gray-300 shadow-lg shadow-gray-400">
    <div>
      <h1 class="font-bold text-gray-600 uppercase">{{ pageName }}</h1>
    </div>
    <div class="flex gap-2">
      <button
        class="flex items-center justify-center my-2 btn-button-default"
        v-if="isExport"
      >
        <div class="flex items-center justify-center w-8 h-8">
          <i class="fa-solid fa-download"></i>
        </div>
      </button>
      <button
        class="flex items-center justify-center my-2 btn-button-default"
        v-if="isFilter"
      >
        <div class="flex items-center justify-center w-8 h-8">
          <i class="fa-solid fa-filter"></i>
        </div>
      </button>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps(["pageName", "isFilter", "isExport"]);

// import { ref, onMounted, watch } from "vue";
// import { useRoute } from "vue-router";

// // Obtém a instância do roteador
// const roteador = useRoute();

// // Ref para armazenar o nome da rota atual
// const currentRouteName = ref("");

// // Atualiza o nome da rota quando a rota muda
// watch(roteador, (to, from) => {
//   currentRouteName.value = to.name || "";
// });

// // Atualiza o nome da rota na montagem inicial
// onMounted(() => {
//   currentRouteName.value = roteador.name || "";
// });
</script>

<style scoped></style>
