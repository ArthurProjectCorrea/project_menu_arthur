<template>
  <div class="flex flex-col">
    <TitlePage :pageName="deshboardPage.label" />

  </div>
</template>

<script setup>
// import TitlePage from "../../components/layout/TitlePage.vue";
import data from "../../DB.js";


const pages = data.pages;

const deshboardPage = pages.find((objeto) => objeto.id === 1);



// const modalAberto = ref(false);

// const isOpenSearch = ref(true);
// console.log(isOpenSearch);

// const openSearchModal = () => {
//   isOpenSearch.value = true;
//   console.log(isOpenSearch.value);
//   return isOpenSearch.value;
// };

// const closeSearchModal = () => {
//   isOpenSearch.value = false;
//   console.log(isOpenSearch.value);
// };
</script>

<style scoped></style>
