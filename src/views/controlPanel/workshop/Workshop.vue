<template>
  <TitlePage :name="currentPage.name" :isCreate="true">
    <button class="btn-background-green" @click="toggleCreatePagePopup">
      <i class="fa-solid fa-window-restore"></i>
    </button>
    <CreatePagePopup
    :showModal="createPagePopupVisible"
    @closeModal="toggleCreatePagePopup"
    />
    <button class="btn-background-green" @click="toggleCreateModulePopup">
      <i class="fa-solid fa-layer-group"></i>
    </button>
    <CreateModulePopup
      :showModal="createModulePopupVisible"
      @closeModal="toggleCreateModulePopup"
    />
  </TitlePage>
  <div class="p-2">
    <h1>tela da oficina</h1>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, watch } from "vue";
import { fetchCurrentPage } from "../../../fetchData";
import TitlePage from "../../../layout/header/TitlePage.vue";
import CreatePagePopup from "./popup/CreatePagePopup.vue";
import CreateModulePopup from "./popup/CreateModulePopup.vue";

const page_id = 3;
const currentPage = ref([]);
const createPagePopupVisible = ref(false);
const createModulePopupVisible = ref(false);

const toggleCreatePagePopup = (valor) => {
  createPagePopupVisible.value = !createPagePopupVisible.value;
};
const toggleCreateModulePopup = (valor) => {
  createModulePopupVisible.value = !createModulePopupVisible.value;
};

onMounted(async () => {
  checkFetchData(page_id);
});

const checkFetchData = async () => {
  const result = await fetchCurrentPage(page_id);
  currentPage.value = result.page;
};
</script>

<style scoped></style>
