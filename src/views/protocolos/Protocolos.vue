<template>
  <div class="flex flex-col">
    <TitlePage :pageName="protocolosPage.label" :isFilter="true" :isExport="true"/>
    <div class="w-full p-2 bg-gray-50 h-[500px]">
      <table class="w-full border border-collapse table-auto border-slate-400">
        <thead>
          <tr>
            <th class="border border-slate-300">PROTOCOLO</th>
            <th class="border border-slate-300">ABERTURA</th>
            <th class="border border-slate-300">INTERNO</th>
            <th class="border border-slate-300">DATA PROMETIDA</th>
            <th class="border border-slate-300">CÓDIGO ÚNICO</th>
            <th class="border border-slate-300">SERIAL</th>
            <th class="border border-slate-300">CLIENTE</th>
            <th class="border border-slate-300">EMPRESA</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in protocolosTable">
            <td class="border border-slate-300">{{item.PROTOCOLO}}</td>
            <td class="border border-slate-300">{{item.ABERTURA}}</td>
            <td class="border border-slate-300">{{item.INTERNO}}</td>
            <td class="border border-slate-300">{{item.DT_PROMETIDA}}</td>
            <td class="border border-slate-300">{{item.CODIGO_UNICO}}</td>
            <td class="border border-slate-300">{{item.SERIAL}}</td>
            <td class="border border-slate-300">{{item.CLIENTE}}</td>
            <td class="border border-slate-300">{{item.EMPRESA}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import TitlePage from "../../components/layout/TitlePage.vue";
import data from "../../DB.js";
import dataProt from "../../table/protocolos.js";

const pages = data.pages;
const protocolosTable = dataProt.protocolos;
const protocolosPage = pages.find((objeto) => objeto.id === 2);



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
