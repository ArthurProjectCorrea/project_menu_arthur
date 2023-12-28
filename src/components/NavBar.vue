<template>
  <nav class="relative flex h-screen shadow-lg shadow-gray-400 bg-gray-50">
    <div v-show="isModule.open" class="p-2 border-r border-gray-300 ">
      <template v-for="item in modules" :key="item.id">
        <button
          @click="selectModule(item.id)"
          :title="item.label"
          class="flex items-center justify-center my-2 btn-button-default"
        >
          <div class="flex items-center justify-center w-8 h-8">
            <i class="fa-solid" :class="item.icon"></i>
          </div>
        </button>
      </template>
    </div>
    <dev
      class="flex flex-col items-center justify-between h-full border-r border-gray-300 "
    >
      <div>
        <!-- LOGO -->
        <div
          class="flex items-center justify-between w-full h-20 gap-8 p-4 border-b border-gray-300"
        >
          <Logo v-show="!isMaximize.open" />
          <button
            @click="toggleIsMaximize"
            class="flex items-center justify-center w-8 h-8"
          >
            <i
              :class="
                !isMaximize.open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
              "
            ></i>
          </button>
        </div>
        <!-- MODULE -->
        <div class="w-full p-2 border-b border-gray-300">
          <!-- <ModuleToggle
          :class="(isDisabled != false) ? '' : 'cursor-not-allowed'"
          @click="toggleModule"
          :name="moduleAtual.label"
          :icon="moduleAtual.icon"
        /> -->
          <button
            @click="toggleModule"
            class="flex items-center justify-center w-full my-2 0 btn-button-default"
            :class="isDisabled != false ? '' : 'cursor-not-allowed'"
          >
            <div class="flex items-center justify-center w-full">
              <div class="flex items-center justify-center w-8 h-8 p-2">
                <i class="fa-solid" :class="moduleAtual.icon"></i>
              </div>
              <div
                class="text-xs font-bold uppercase"
                v-show="!isMaximize.open"
              >
                <span>{{ moduleAtual.label }}</span>
              </div>
            </div>
          </button>
        </div>
        <!-- SEARCH -->
        <div class="w-full p-2 border-b border-gray-300">
          <SearchModal :showModal="!isMaximize.open" :itens="pages" :module="modules"/>
        </div>
        <!-- OPTION MENU CUSTOM FROM MODULE -->
        <div class="w-full p-2 overflow-y-auto h-[530px]">
          <template v-for="page in pages">
            <div
              v-if="page.module_id === moduleAtual.id"
              :title="page.label"
              class=""
            >
              <router-link
                :to="page.route"
                class="flex items-center gap-2 p-2 text-gray-600 rounded-md hover:bg-blue-100 hover:text-blue-500"
              >
                <div class="flex items-center justify-center w-8 h-8">
                  <i class="fa-solid" :class="page.icon"></i>
                </div>
                <div
                  class="text-sm font-medium uppercase line-clamp-1"
                  v-show="!isMaximize.open"
                >
                  {{ page.label }}
                </div>
              </router-link>
            </div>
          </template>
        </div>
        <!-- OPTION MENU GROUP MENU -->
        <!-- <div class="w-full p-2">
                      <template v-for="group in groups">
                          <div
                              v-if="group.id != 1"
                              :title="group.label"
                              class="flex items-center gap-2 p-2 rounded-md hover:bg-blue-100 hover:text-blue-500"
                          >
                              <div class="flex items-center justify-center w-8 h-8">
                                  <i class="fa-solid" :class="group.icon"></i>
                              </div>
                              <div
                                  
                                  class="text-sm font-medium uppercase line-clamp-1"
                              >
                                  {{ group.label }}
                              </div>
                          </div>
                      </template>
                  </div> -->
      </div>
      <!-- OPTION SYSTEM -->
      <div class="w-full p-2 border-t border-gray-300">
        <div
          title="perfil"
          class="flex items-center gap-2 p-2 text-gray-600 rounded-md hover:bg-blue-100 hover:text-blue-500"
        >
          <div class="flex items-center justify-center w-8 h-8">
            <i class="fa-solid fa-user"></i>
          </div>
          <div class="text-sm font-medium uppercase" v-show="!isMaximize.open">
            <p>PERFIL</p>
          </div>
        </div>
        <div
          title="notificação"
          class="flex items-center gap-2 p-2 text-gray-600 rounded-md hover:bg-blue-100 hover:text-blue-500"
        >
          <div class="flex items-center justify-center w-8 h-8">
            <i class="fa-solid fa-bell"></i>
          </div>
          <div class="text-sm font-medium uppercase" v-show="!isMaximize.open">
            <p>NOTIFICAÇÃO</p>
          </div>
        </div>
        <div
          title="documentação"
          class="flex items-center gap-2 p-2 text-gray-600 rounded-md hover:bg-blue-100 hover:text-blue-500"
        >
          <div class="flex items-center justify-center w-8 h-8">
            <i class="fa-solid fa-book"></i>
          </div>
          <div class="text-sm font-medium uppercase" v-show="!isMaximize.open">
            <p>DOCUMENTAÇÃO</p>
          </div>
        </div>
        <div
          title="sair"
          class="flex items-center gap-2 p-2 text-gray-600 rounded-md hover:bg-blue-100 hover:text-blue-500"
        >
          <div class="flex items-center justify-center w-8 h-8">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </div>
          <div class="text-sm font-medium uppercase" v-show="!isMaximize.open">
            <p>SAIR</p>
          </div>
        </div>
      </div>
    </dev>
  </nav>
</template>

<script setup>
import data from "../DB.js";
import ModuleToggle from "./toggles/ModuleToggle.vue";
import SearchModal from "./modal/SearchModal.vue";
import { reactive, ref, onMounted } from "vue";
import Logo from "../components/Logo.vue";

// RECEBENDO RECEBNDO ARRAY DO DB.JS
const modules = data.modules;
const pages = data.pages;
const moduleDefaultId = data.users;

// const moduleAtual = 1;



// FILTRANDO DADOS DO ARRAY
const valueModuleDefault = moduleDefaultId.moduledefault_id;

// FUNÇÕES DE ALTERNANCIA DE MODULOS
const cacheModule = () => {
  const moduleCache = localStorage.getItem("openModuleCache");
  return moduleCache ? parseInt(moduleCache, 10) : valueModuleDefault;
};
const moduleDefault = ref(cacheModule());
const moduleAtual = modules.find((objeto) => objeto.id === moduleDefault.value);
const newModule = (newValueModule) => {
  moduleDefault.value = newValueModule;
  localStorage.setItem("openModuleCache", newValueModule.toString());
};
const selectModule = (newValueModule) => {
  newModule(newValueModule);
  location.reload();
};

// MONTADOR
onMounted(() => {});

// VARIAVEIS DE ESTADO TOGGLE
const isMaximize = reactive([{ open: true }]);
const isModule = reactive([{ open: false }]);
const isDisabled = true;

// FUNÇÕES DE TOGGLE
const toggleIsMaximize = () => {
  isMaximize.open = !isMaximize.open;
  return isMaximize.open;
};
const toggleModule = () => {
  if (isDisabled != false) {
    isModule.open = !isModule.open;
    return isModule.open;
  }
};
</script>

<style scoped></style>
