<template>
  <button
    @click="toggleIsOpenSearch"
    class="flex items-center justify-center w-full my-2 0 btn-button-default"
  >
    <div class="flex items-center justify-center w-full">
      <div class="flex items-center justify-center w-8 h-8 p-2">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div class="text-xs font-bold uppercase" v-if="showModal">
        <span>Pesquise...</span>
      </div>
    </div>
  </button>
  <div class="modal-overlay" v-if="isOpenSearch.open">
    <div class="modal">
      <!-- Conteúdo do modal -->
      <div class="relative flex items-center justify-between w-full gap-2">
        <div class="absolute left-0 flex items-center justify-center w-8 h-8">
          <i class="text-gray-600 fa-solid fa-magnifying-glass"></i>
        </div>
        <input
          class="w-full h-8 py-2 pl-8 text-base transition-all duration-150 bg-gray-100 border border-gray-300 rounded-md outline-none focus:border-blue-500"
          v-model="inputFilter"
          type="text"
          placeholder="Pesquise..."
        />
        <div>
          <button @click="toggleIsOpenSearch" class="btn-button-default">
            <div class="flex items-center justify-center w-8 h-8">
              <i class="fa-solid fa-xmark"></i>
            </div>
          </button>
        </div>
      </div>
      <div class="w-full h-full overflow-y-auto">
        <template v-for="page in filterList" :key="page.id">
          <div class="flex w-full my-2">
            <router-link
              @click="toggleIsOpenSearch"
              :to="page.route"
              class="flex items-center w-full gap-2 p-2 text-gray-600 border rounded-md hover:bg-blue-100 hover:text-blue-500"
            >
              <div class="flex items-center justify-center w-8 h-8">
                <i class="fa-solid" :class="page.icon"></i>
              </div>
              <div
                class="flex flex-col items-start justify-between w-full gap-2 text-sm font-medium uppercase"
              >
                <p class="w-full">
                  {{ page.label }}
                </p>
                <div class="flex w-full text-xs">
                  <p>Modulo:</p>
                  <div v-for="module in modules">
                    <div v-if="module.id === page.module_id" class="ml-2">
                      {{ module.label }}
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </template>
      </div>
      <slot> </slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive, ref, computed } from "vue";
import data from "../../DB.js";

const props = defineProps(["showModal", "name"]);

const pages = data.pages;
const modules = data.modules;

const isOpenSearch = reactive([{ open: true }]);
const inputFilter = ref("");

const filterList = computed(() =>
  pages.filter((page) =>
    page.label.toLowerCase().includes(inputFilter.value.toLowerCase())
  )
);

const toggleIsOpenSearch = () => {
  isOpenSearch.open = !isOpenSearch.open;
  return isOpenSearch.open;
};
</script>

<style scoped></style>
