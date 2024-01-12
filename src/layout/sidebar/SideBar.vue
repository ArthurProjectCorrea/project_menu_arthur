<template>
  <nav
    class="relative flex flex-col items-center justify-between h-screen border-r border-gray-300 shadow-lg shadow-gray-400 bg-gray-50"
  >
    <div>
      <!-- LOGO -->
      <div
        class="flex items-center justify-between w-full h-20 gap-8 p-4 border-b border-gray-300"
      >
        <Logo v-show="!isMaximize" />
        <button
          @click="toggleIsMaximize"
          class="flex items-center justify-center w-8 h-8"
        >
          <i
            :class="!isMaximize ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"
          ></i>
        </button>
      </div>
      <!-- MODULE -->
      <div class="w-full p-2 border-b border-gray-300">
        <button @click="toggleModulePopup" class="btn-special">
          <div class="flex items-center justify-center w-full">
            <div class="flex items-center justify-center w-8 h-8 p-2">
              <i class="fa-solid" :class="selectedModule.icon"></i>
            </div>
            <div class="text-xs font-bold uppercase" v-show="!isMaximize">
              <span>{{ selectedModule.name }}</span>
            </div>
          </div>
        </button>
        <div>
          <ModulePopup
            :showModal="modulePopupVisible"
            @closeModal="toggleModulePopup"
            @moduleDetail="saveNewCurrentModule"
          />
        </div>
      </div>
      <!-- SEARCH -->
      <div class="w-full p-2 border-b border-gray-300">
        <button @click="toggleSearchPopup" class="btn-special">
          <div class="flex items-center justify-center w-full">
            <div class="flex items-center justify-center w-8 h-8 p-2">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="text-xs font-bold uppercase" v-show="!isMaximize">
              <span>pesquisar</span>
            </div>
          </div>
        </button>
        <SearchPopup
          :showModal="searchPopupVisible"
          @closeModal="toggleSearchPopup"
        />
      </div>
      <!-- OPTION MENU CUSTOM FROM MODULE -->
      <div class="flex flex-col w-full p-2 overflow-y-auto flex-nowrap">
        <template v-for="page in pages">
          <div v-if="page.module_id === selectedModule.id" :title="page.name">
            <router-link
              :to="{ name: page.route_name }"
              class="flex items-center gap-2 p-2 text-gray-600 rounded-md hover:bg-blue-100 hover:text-blue-500"
            >
              <div class="flex items-center justify-center w-8 h-8">
                <i class="fa-solid" :class="page.icon"></i>
              </div>
              <div
                class="text-sm font-medium uppercase line-clamp-1"
                v-show="!isMaximize"
              >
                {{ page.name }}
              </div>
            </router-link>
          </div>
        </template>
      </div>
    </div>
    <!-- OPTION SYSTEM -->
    <div class="w-full p-2 border-t border-gray-300">
      <button
        @click=""
        title="perfil"
        class="flex items-center w-full gap-2 p-2 text-gray-600 rounded-md hover:bg-blue-100 hover:text-blue-500"
      >
        <div class="flex items-center justify-center w-8 h-8">
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="text-sm font-medium uppercase" v-show="!isMaximize">
          <p>PERFIL</p>
        </div>
      </button>
      <div>
        <ProfilePopup
          :showModal="profilePopupVisible"
          @closeModal="toggleProfilePopup"
        />
      </div>
      <div
        title="notificação"
        class="flex items-center gap-2 p-2 text-gray-600 rounded-md hover:bg-blue-100 hover:text-blue-500"
      >
        <div class="flex items-center justify-center w-8 h-8">
          <i class="fa-solid fa-bell"></i>
        </div>
        <div class="text-sm font-medium uppercase" v-show="!isMaximize">
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
        <div class="text-sm font-medium uppercase" v-show="!isMaximize">
          <p>DOCUMENTAÇÃO</p>
        </div>
      </div>
      <div
        @click="logoult"
        title="sair"
        class="flex items-center gap-2 p-2 text-gray-600 rounded-md hover:bg-blue-100 hover:text-blue-500"
      >
        <div class="flex items-center justify-center w-8 h-8">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </div>
        <div class="text-sm font-medium uppercase" v-show="!isMaximize">
          <p>SAIR</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { reactive, ref, onMounted, watch } from "vue";
import { fetchCurrentUser, fetchPages } from "../../fetchData";
import SearchPopup from "./popup/SearchPopup.vue";
import ModulePopup from "./popup/ModulePopup.vue";
import ProfilePopup from "./popup/ProfilePopup.vue";
import Logo from "../../components/Logo.vue";

const modulePopupVisible = ref(false);
const searchPopupVisible = ref(false);
const profilePopupVisible = ref(false);
const isMaximize = ref(false);

const toggleModulePopup = (valor) => {
  modulePopupVisible.value = !modulePopupVisible.value;
};
const toggleSearchPopup = (valor) => {
  searchPopupVisible.value = !searchPopupVisible.value;
};
const toggleProfilePopup = (valor) => {
  profilePopupVisible.value = !profilePopupVisible.value;
};

const pages = ref([]);
const moduleDefault = ref([]);

const toggleIsMaximize = () => {
  isMaximize.value = !isMaximize.value;
  localStorage.setItem("storageIsMaximize", JSON.stringify(isMaximize.value));
};

const checkFetchData = async () => {
  pages.value = await fetchPages();
  const resultCurrentUser = await fetchCurrentUser();
  moduleDefault.value = resultCurrentUser.module || [];
  localStorage.setItem(
    "storageModuleDefault",
    JSON.stringify(moduleDefault.value)
  );
};

const saveNewCurrentModule = (item) => {
  localStorage.setItem("storageModule", JSON.stringify(item));
  selectedModule.value = checkModuleLocalStorage();
};

const checkModuleLocalStorage = () => {
  const resultModuleDefault =
    JSON.parse(localStorage.getItem("storageModuleDefault")) || [];
  const currentModule =
    JSON.parse(localStorage.getItem("storageModule")) || resultModuleDefault;
  return currentModule;
};

const selectedModule = ref(checkModuleLocalStorage());

watch(selectedModule, () => {});

const logoult = () => {
  localStorage.clear();
  location.reload();
};

onMounted(async () => {
  checkFetchData();

  const currentIsMaximize = localStorage.getItem("storageIsMaximize");
  if (currentIsMaximize !== null) {
    isMaximize.value = JSON.parse(currentIsMaximize);
  }
});
</script>

<style scoped></style>
